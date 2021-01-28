import {action, makeAutoObservable} from 'mobx';

class ModalStore {
  modalProps = {
  	show: false,
  	children: () => null,
  	empty: false,
  	full: false,
  };
  
  constructor() {
  	makeAutoObservable(this)
  }
  
  @action showModal = (children: () => any, props?: {empty?: boolean, full?: boolean}): void => {
  	this.modalProps = {
  		children,
  		show: true,
  		empty: props?.empty ? props.empty : false,
  		full: props?.full ? props.full : false
  	}
  };
  
  @action closeModal = (): void => {
  	this.modalProps = {
  		children: () => null,
  		show: false,
  		empty: false,
  		full: false,
  	}
  }
}

const modalStore = new ModalStore();
export default modalStore;
