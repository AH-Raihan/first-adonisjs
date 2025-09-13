import CrudsController from '#controllers/crudsController';
import Route from '@adonisjs/core/services/router';
Route.get('/', ({ view }) => {
    return view.render('pages/home');
}).as('home');
Route.get('/list', [CrudsController, 'index']).as('list');
Route.get("/create", [CrudsController, 'create']).as('create');
Route.get('/edit/:id', [CrudsController, 'edit']).as('edit');
Route.post('/update', [CrudsController, 'update']).as('update');
//# sourceMappingURL=routes.js.map