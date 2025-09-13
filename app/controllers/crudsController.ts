import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class CrudsController {
    public async index({ view } : HttpContext){
        const users = await User.all()
        return view.render('pages/admin/dashboard',{users})
    }
    public async create({ response }: HttpContext){
        const user = new User()
        const today = new Date()
        user.fullName = "Raihanssss"
        user.email=`${today.getTime()}@gmail.com`
        user.password = 'hh'
        await user.save()

        return response.json(user)
    }
    async edit({params,view} : HttpContext){
        const user = await User.findOrFail(params.id)
        return view.render('pages/admin/edit',{user})
    }
    async update({request, response} : HttpContext){
        const user = await User.findOrFail(request.input('id'))
        user.fullName = request.input('fullname')
        user.email= request.input('email')
        user.password = 'hhd'
        await user.save()
        return response.redirect().toRoute('list')
    }
}