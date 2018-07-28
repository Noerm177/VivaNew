import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {
  @Input() mensaje: string;
  public showAlert = false;
  tipo  = true;
  constructor() { }

  ngOnInit() {
  }

  showMessage(message: string, tipo: boolean) {
    this.showAlert = true;
    this.mensaje = message;
    this.tipo = tipo;
    setTimeout(() => {
      this.mensaje = '';
      this.showAlert = false;
    }, 5000);
  }
}
