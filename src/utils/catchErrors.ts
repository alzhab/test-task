import noticeMessageStore, {NoticeTypeEnum} from '../stores/NoticeMessageStore';

const storeCatchError = (error: any) => {
  if (error.response) {
    error = error.response.data
  } else {
    error = {message: 'Something was wrong'}
  }
  
  noticeMessageStore.showMessage(error.message, NoticeTypeEnum.error);
};

export default {
  storeCatchError
}
