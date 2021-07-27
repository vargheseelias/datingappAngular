import { Observable} from 'rxjs';
import { ConfirmDialogComponent } from './../modals/confirm-dialog/confirm-dialog.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  bsModelRef:BsModalRef;

  constructor(private ModalService: BsModalService) { }

  confirm(title = 'Confirmation',
    message = 'Are you sure you want to do this ?',
    btnOkText = 'Ok',
    btnCancelText = 'Cancel'): Observable<boolean> {
      const config = {
        initialState: {
         title,
         message,
         btnOkText,
         btnCancelText
        }
      }

      this.bsModelRef = this.ModalService.show(ConfirmDialogComponent, config);

      return new Observable<boolean>(this.getResult());

    }

    private getResult() {
      return (observer) => {
        const subscription = this.bsModelRef.onHidden.subscribe(() => {
          observer.next(this.bsModelRef.content.result);
          observer.complete();
        });

        return {
          unsubscribe() {
            subscription.unsubscribe();
          }
        }
      }
    }

}
