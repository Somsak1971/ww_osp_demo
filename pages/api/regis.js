// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Regisuser from '../../models/regisuser'
import connect from '../../utils/connectDB'

connect()

export default async function handler (req,res){
  const { method } = req;
  if( method === 'GET') {
    try {

      const regisuser = await Regisuser.fine();
      res.status(200).json(resiguser);

    } catch (error) {
      res.status(400).json({status:'Not able to create a new user.'})
    }

  }

  if( method === 'POST') {
    try {

      const regisuser = await Regisuser.create(req.body);
      res.redirect('/home')
      if(!regisuser){
          return res.json({code:'User not created'})
      }
    } catch (error) {
      res.status(400).json({status:'Not able to create a new user.'})
      }
  }
  
  }