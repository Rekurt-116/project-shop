import { Component, inject } from '@angular/core';
import { OrderService } from '../service/order-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderForm } from '../../../shared/models/interfaces/orders/order.interface';
import { CommonModule } from '@angular/common';
import { russianPhoneValidator } from '../../../shared/validators/validator-for-rus-number';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-orders',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  private orderService = inject(OrderService);

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  this.form = this.fb.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[А-Яа-яЁё\s-]+$/),
      ],
    ],

    phone: ['', [Validators.required, russianPhoneValidator]],

    service: ['', Validators.required],
  });
}


  public createOrder() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const order: OrderForm = this.form.value;

    this.orderService.sendOrder(order).subscribe({
      next: () => {
        console.log('Заявка отправлена');
        this.form.reset();
      },
      error: (err) => {
        console.error('Ошибка отправки', err);
      },
    });
  }

  get f() {
    return this.form.controls;
  }
}
