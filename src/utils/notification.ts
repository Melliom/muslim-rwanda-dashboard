import cogoToast from 'cogo-toast';
import { NotificationTypes, PositionTypes } from 'interfaces/notification';

export default (
  message: string,
  status: NotificationTypes = 'success',
  position: PositionTypes = 'top-right',
) =>
  cogoToast[status](message, {
    position,
    bar: { size: '6px' },
    hideAfter: 5,
  });
