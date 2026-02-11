import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { OrderForm } from '../../../shared/models/interfaces/orders/order.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  name = '';
  phone = '';
  service = '';
  private telegramUrl = `https://api.telegram.org/bot${environment.telegram.botToken}/sendMessage`;
  private chatId = environment.telegram.chatId;
  private http = inject(HttpClient);

  sendOrder(order: OrderForm) {
    const servicesMap: Record<string, string> = {
      consultation: 'Консультация',
      cleaning: 'Чистка',
      treatment: 'Лечение',
      implant: 'Имплантация',
    };

    const digits = order.phone.replace(/\D/g, '');
    const formattedPhone = `+${digits}`;

    const message = `
🦷 Новая заявка

👤 Имя: ${order.name}
📞 Телефон: +${order.phone.replace(/\D/g, '')}
🛠 Услуга: ${servicesMap[order.service]}
  `;

    return this.http.post(this.telegramUrl, {
      chat_id: this.chatId,
      text: message,
    });
  }
}
