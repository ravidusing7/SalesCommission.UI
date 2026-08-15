import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrelationIdService {
  private readonly key = 'correlationId';
  
 generate(): string {
    const correlationId = crypto.randomUUID();

    sessionStorage.setItem(this.key, correlationId);

    return correlationId;
  }

  get(): string | null {
    return sessionStorage.getItem(this.key);
  }

  clear(): void {
    sessionStorage.removeItem(this.key);
  }
}
