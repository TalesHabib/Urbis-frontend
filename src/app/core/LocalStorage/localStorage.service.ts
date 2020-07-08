import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    jwtHelper = new JwtHelperService();

    temToken(): boolean {
        return !!this.getToken();
    }

    setToken(token: string): void {
        window.localStorage.setItem(KEY, JSON.stringify(token));
    }

    getToken(): string {
        return window.localStorage.getItem(KEY);
    }

    getTokenDecodificado(): any {
        return this.jwtHelper.decodeToken(this.getToken());
    }

    removerToken(): void {
        window.localStorage.removeItem(KEY);
    }
}
