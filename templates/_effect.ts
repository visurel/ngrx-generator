import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { {{ properCase name }}Service } from '{{position "services"}}/{{ lowerCase name }}.service';
import * as from{{ properCase name }} from '{{position "actions"}}/{{ lowerCase name }}.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {

  @Effect() load$ = this.actions$
      .ofType(from{{ properCase name }}.LOAD)
      .switchMap(payload => this.{{ camelCase name }}Service
        .get()
        .map(res => new from{{ properCase name }}.LoadSuccess(res))
        .catch(err => new from{{ properCase name }}.LoadFail(err))
      )

  // Effects

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
) { }
}