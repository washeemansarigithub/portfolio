import "./About.css";
import weath from "./weath.avif";
import barber from "./barber.avif";
import drum from "./drum.avif";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function About(){
    return (
        <>
          <section className="about" >
                <h1>About Me</h1>
                <p>A motivated and enthusiastic MERN stack developer with a strong foundation in web development and a 
passion for building efficient, scalable web applications. Seeking an entry-level position to apply my skills and 
contribute to the success of a dynamic tech team..</p>
            </section>
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on recently.</p>
            <section  className="project">
               
                <Card sx={{ maxWidth: 345 }}>
     <CardMedia
        sx={{ height: 140 }}
        image={weath}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Weather App
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        A weather app can provide information about the weather, including forecasts, precipitation levels, air quality, and more. Weather apps can be useful for helping people make informed decisions about their day, such as when to expect a change in the weather. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Live</Button>
       
      </CardActions>
    </Card>
       {/* second project */}
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
        sx={{ height: 140 }}
        image={drum}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          DrumKit Game
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        This app features a variety of songs from different genres, and lets users play along with them. Users can also choose to play with a band, or in solo mode. The app uses augmented reality (AR) to let users place their drum kit wherever they want
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Live</Button>
       
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
        sx={{ height: 140 }}
        image={barber}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Online Barber's Appointment
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        
The proposed project is smart appointment booking system that provides Customer or any
user and easy way of booking a Barber appointment online. This is a web based application
that overcomes the issue of managing and booking appointments according to user’s choice
or demand.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Live</Button>
       
      </CardActions>
    </Card>
            </section>
        
        </>
    )
}