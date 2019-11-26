import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import { red } from '@material-ui/core/colors';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import {browserHistory} from './App'
import AccountsUIWrapper from './common/AccountWrapper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '40vh',
    //   backgroundImage: `url(${"../assets/landing.jpg"})`,
    //   backgroundSize: 'cover',
      backgroundPosition: 'center',
      background: 'linear-gradient(90deg, rgba(0,160,232,0.8) 0%, rgba(178,150,255,0.8) 50%, rgba(255,202,127,0.7959558823529411) 100%)',
      color: 'white',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    card: {
        width: 550,
        height: 220,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginTop: 30,
        border: 'none',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    h1: {
        textAlign: 'center',
    },
    btnLoging: {
        textAlign: 'center',
        backgroundColor: '#c51162',
        justifyContent: 'center !important',
        width: 300,
        color: 'white',

    },
    btnSingUp:{
        textAlign: 'center',
        backgroundColor: '#3f51b5',
        justifyContent: 'center !important',
        width: 300,
        color: 'white',
    },
    cardactions: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
    },
    content: {
        backgroundColor: "black",
        height: '60vh',

    },
    h2: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 40,
    },
    icon1:{
        width: 80,
        height: 80,
        textAlign: 'center',
        color: 'white',
    },
    steps: {
        textAlign: "center",
        color: 'white',
    },
    h3: {
        fontSize: 30,
    },
    stepsP: {
        fontSize: 20,
    }
}));
  
const goTo = (route) => browserHistory.push(route)

export default function Landing(props){
    const classes = useStyles();
    return (
        <div>
        <div className={classes.root}>
            <Grid 
            container 
            spacing={2}
            justify="center"
            alignItems="center">
                <Grid item xs={12} md={6} lg={6} >
                    <h1 className={classes.h1}>ALERTA PARA LAS DONACIONES DE MERCADO PAGO</h1>
                    <p className={classes.p}>Incrementa la interacción con los seguidores de tu Stream!</p>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                ¿Sos Parte de la Comunidad?
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardactions}>
                            <Button size="large" onClick={() => goTo('/users/signup')} className={classes.btnSingUp}>Registrate Ya!</Button>
                        </CardActions>
                        <CardActions className={classes.cardactions}>
                            <Button size="large" onClick={() => goTo('/users/login')} className={classes.btnLoging}>Ingresa</Button>
                        </CardActions>

                        {/* <CardActions className={classes.cardactions}>
                            <Button size="large" onClick={() => goTo('/dashboard')} className={classes.btnLoging}>DASHBOARD TEST - BORRAR</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
            </Grid>
        </div>
        <div className={classes.content}>
            <Grid container  justify="center" alignItems="center">
                <Grid item xs={12} md={12} lg={12} >
                    <h2 className={classes.h2}>¿Como Funciona?</h2>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item md={4} lg={4}  className={classes.steps}>
                    <MailOutlineOutlinedIcon className={classes.icon1}/>
                    <h3 className={classes.h3}>1°</h3>
                    <h3 className={classes.h3}>Creamos la Donacion</h3>
                    <p className={classes.stepsP}>El donador ingresará su nombre, monto y mensaje. Luego será redirigido a MercadoPago con un ticket a abonar</p>
                </Grid>
                <Grid item md={4} lg={4}  className={classes.steps}>
                    <PaymentOutlinedIcon className={classes.icon1}/>
                    <h3 className={classes.h3}>2°</h3>
                    <h3 className={classes.h3}>Confirmamos el pago</h3>
                    <p className={classes.stepsP}>Una vez abonado el ticket, MercadoPago nos avisa si la transacción fue exitosa (directa a tu cuenta)</p>
                </Grid>
                <Grid item md={4} lg={4}  className={classes.steps}>
                    <NotificationsActiveOutlinedIcon className={classes.icon1}/>
                    <h3 className={classes.h3}>3°</h3>
                    <h3 className={classes.h3}>Alerta!</h3>
                    <p className={classes.stepsP}>Creamos una alerta en StreamLabs o Streamelement, la cual sonará inmediatamente y contará para los Tops y Goals</p>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}