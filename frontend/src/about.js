import lp from './Assets/lp.png'
import './about.css';
import { BsEnvelopeArrowDown } from 'react-icons/bs';
export default function Footer() {
    return (
        <>
            <div style={{ marginTop: '100px', height: '100%', width: '100%' }}>
                <div style={{ display: 'flex', gap: '120px', color: 'black' }}>

                    <ul style={{ fontSize: '25px', marginLeft: '100px' }}><b> Services</b><hr></hr>
                        <li id='l'>WebDesigning</li><br />
                        <li id='l'>Tally</li><br />
                        <li id='l'>GraphicDesigning</li><br />
                        <li id='l'>Testing</li><br />

                    </ul>
                    <ul style={{ fontSize: '25px', marginLeft: '300px' }}> Contact<hr></hr><br></br>
                        <span style={{ fontSize: '20px' }}>Madhurawada Branch<br></br>
                            +91 99887 62341<br></br>
                            info@luckandpower.com<br></br>
                            122, D, No 2-73/2B, H. I. G_<br /> near Ravindra Bharathi school<br /> P.M.palem Vuda Colony, Madhurawada<br /> Visakhapatnam, Andhra Pradesh 530041</span>

                    </ul>
                </div>
                <center>
                    <div >
                        <p style={{ fontSize: '25px', marginTop: '100px' }}><center><b>Social media</b></center><hr></hr></p>
                        <a href='https://www.facebook.com/'><img src='https://cdn-icons-png.flaticon.com/128/87/87421.png' height={'50px'} width={'50px'} alt='youtube' /></a>
                        <a href='https://www.facebook.com/'><img src='https://cdn-icons-png.flaticon.com/128/101/101094.png' height={'50px'} width={'50px'} alt='facebook' /></a>
                        <a href='https://www.facebook.com/'><img src='https://th.bing.com/th/id/OIP.L5Pou3uV-5EZtAtWPV3OlQHaHa?w=192&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7' height={'50px'} width={'50px'} alt='Instagram' style={{ borderRadius: '7px' }} /></a>
                        <br></br><br></br>
                        <span id='in'>Don’t miss our future updates! Get Subscribed Today! <br></br><BsEnvelopeArrowDown /><input type='email' id='input' placeholder='Your email here' /></span>

                    </div>
                </center>
            </div>
            <center><p id='com'>©2024. L&p Technology Pvt Ltd. All Rights Reserved.</p></center>
            <div style={{width:'100%',background:'#4c7766'}}><center> <img src={lp} alt='logo' height={'100px'} width={'150px'} style={{borderRadius:'10px'}} /></center></div>

        </>
    )
}