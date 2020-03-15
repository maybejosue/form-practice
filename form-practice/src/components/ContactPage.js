import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "../App.css"

//Styles
const useStyles = makeStyles(() => ({
    root: {
      width: '15px'
    },
    multilineForm: {
        width: '30%'
    }
  }));

  //Component
export default function ContactPage() {
    const classes = useStyles()
    const [form, setForm] = useState(
        {
            fullname: '',
            email: '',
            company: '',
            message: ''
        }
    );

    console.log(form)

    const handleChanges = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className='formContainer'>
            <form  className='innerContainer' autoComplete='off'>
                <TextField name = 'fullname' value={form.fullname} onChange={handleChanges} label="Name" variant="filled" />
                <br/>

                <TextField name= 'email' type='email' value={form.email} onChange={handleChanges} label="Email" variant="filled" />
                <br/>

                <TextField id="filled-basic" label="Company" name='company' value={form.company} onChange={handleChanges} variant="filled" />
                <br/>
            
                
                <TextField  id="filled-multiline-static" className={classes.multilineForm} label="Message" name='message' value={form.message} onChange={handleChanges} variant="filled"  rows="10" multiline />
                <br/>
               
                <Button variant="contained" color='primary'>Submit</Button>


            </form>
     </div>
    )
}