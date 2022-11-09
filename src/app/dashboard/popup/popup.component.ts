//@ts-nocheck
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'c',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent implements OnInit {
popupContent = false
loader = false
da = document.getElementsByClassName('form')
checkoutForm = this.formBuilder.group({
  email: '',
  address: ''
});
constructor(@Inject(MAT_DIALOG_DATA) public data: any,
private formBuilder: FormBuilder,
  public dailogRef: MatDialogRef<PopupComponent>,) { 
    if (data) {
      this.popupContent = data.popupContent;
    }
  }
  // onSubmit(): void {
  //   // Process checkout data here
   
  //   console.warn('Your order has been submitted', this.checkoutForm.value);
  //   console.log('yes yes yes')
    
  // }

  ngOnInit(): void {

  }
  closeDialog() {
    this.dailogRef.close();
    this.popupContent = false;
    const faded = document.getElementsByClassName('cdk-overlay-container')[0]
    faded.style.visibility = 'hidden'
    console.log('div dis')
    const homepageSubscription = document.getElementById('ifraContainer2')
    homepageSubscription.style.visibility = "visible"
    // const scroller = document.getElementsByClassName('cdk-global-scrollblock')[0]
    // scroller.style.position = 'unset'

  }
  @HostListener('window:load')
test2()
{
  console.log('this popup component')
}
}
