import connect from '../../utils/connectDB'
import Regisuser from '../../models/regisuser'
// import { useRouter } from 'next/router'

connect()

export default async function handler(req,res){

    // const router = useRouter()
    const {email, password}=req.body
    const regisuser = await Regisuser.findOne({email,password})
    if(!regisuser){
        return res.json({status:'Not able to find the user'})
    }
    else {
        res.redirect('/home')
    }
}
