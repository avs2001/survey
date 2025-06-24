npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> survey@0.0.0 start
> ng serve

❯ Building...
✔ Building...
Application bundle generation failed. [3.346 seconds]

[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mNG2: Type 'Item[]' is not assignable to type 'string[]'.
  Type 'Item' is not assignable to type 'string'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/detail/list-detail.page.html:4:18:
[37m      4 │   <app-item-list [[32mitems[37m]="items()[route.snapshot.paramMap.get('id')...
        ╵                   [32m~~~~~[0m

  Error occurs in the template of component ListDetailPage.

    src/app/lists/detail/list-detail.page.ts:13:15:
[37m      13 │   templateUrl: [32m'./list-detail.page.html'[37m,
         ╵                [32m~~~~~~~~~~~~~~~~~~~~~~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mNG1: Property 'route' is private and only accessible within class 'ListDetailPage'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/detail/list-detail.page.html:4:34:
[37m      4 │ ...pp-item-list [items]="items()[[32mroute[37m.snapshot.paramMap.get('id') ...
        ╵                                  [32m~~~~~[0m

  Error occurs in the template of component ListDetailPage.

    src/app/lists/detail/list-detail.page.ts:13:15:
[37m      13 │   templateUrl: [32m'./list-detail.page.html'[37m,
         ╵                [32m~~~~~~~~~~~~~~~~~~~~~~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS2345: Argument of type 'string[] | undefined' is not assignable to parameter of type 'string[]'.
  Type 'undefined' is not assignable to type 'string[]'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/category.service.ts:29:24:
[37m      29 │     this.categories.set([32mcats[37m);
         ╵                         [32m~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS18048: 'cats' is possibly 'undefined'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/category.service.ts:32:22:
[37m      32 │     await Promise.all([32mcats[37m.map(c => tx.store.put(c, c)));
         ╵                       [32m~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS2339: Property 'subscribe' does not exist on type 'WritableSignal<boolean>'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/item.service.ts:27:27:
[37m      27 │     this.connection.online.[32msubscribe[37m(o => { if (o) this.sync(); });
         ╵                            [32m~~~~~~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS7006: Parameter 'o' implicitly has an 'any' type.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/item.service.ts:27:37:
[37m      27 │     this.connection.online.subscribe([32mo[37m => { if (o) this.sync(); });
         ╵                                      [32m^[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS2339: Property 'subscribe' does not exist on type 'WritableSignal<boolean>'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/list.service.ts:29:27:
[37m      29 │     this.connection.online.[32msubscribe[37m(o => { if (o) this.sync(); });
         ╵                            [32m~~~~~~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS7006: Parameter 'o' implicitly has an 'any' type.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/list.service.ts:29:37:
[37m      29 │     this.connection.online.subscribe([32mo[37m => { if (o) this.sync(); });
         ╵                                      [32m^[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS18048: 'serverLists' is possibly 'undefined'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/list.service.ts:55:24:
[37m      55 │       await Promise.all([32mserverLists[37m.map(l => tx.store.put(l)));
         ╵                         [32m~~~~~~~~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS2345: Argument of type 'string[] | undefined' is not assignable to parameter of type 'string[]'.
  Type 'undefined' is not assignable to type 'string[]'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/suggestion.service.ts:36:19:
[37m      36 │     this.cache.set([32mlist[37m);
         ╵                    [32m~~~~[0m


[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mTS18048: 'list' is possibly 'undefined'.[0m [1m[35m[plugin angular-compiler][0m

    src/app/lists/services/suggestion.service.ts:39:22:
[37m      39 │     await Promise.all([32mlist[37m.map(s => tx.store.put(s, s)));
         ╵                       [32m~~~~[0m


Watch mode enabled. Watching for file changes...
