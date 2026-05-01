import { Box, Typography, LinearProgress } from '@mui/material';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import { useNavigate } from 'react-router-dom';
import pictLogo from '../assets/pictLogo.png';

export default function LoadingPage() {
  const navigate = useNavigate();

  const handleTap = () => {
    navigate('/main'); 
  };

  return (
    <Box
      onClick={handleTap}
      sx={{
        width: 390,
        height: 844,
        mx: 'auto',
        mt: 4,
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#329572',
        cursor: 'pointer', // Shows the user it's clickable
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          pt: 2,
          color: 'white',
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>9:41</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SignalCellular4BarIcon sx={{ fontSize: 18 }} />
          <WifiIcon sx={{ fontSize: 18 }} />
          <BatteryFullIcon sx={{ fontSize: 20 }} />
        </Box>
      </Box>

      {/* Logo */}
      <Box
        sx={{
          position: 'absolute',
          top: '28%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src={pictLogo}
          alt="Logo"
          sx={{ width: 120, objectFit: 'contain' }}
        />
      </Box>

      {/* Bottom Decorative Section & Progress */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: -30,
          width: 450,
          height: 450,
          background: 'linear-gradient(180deg, #79be8d 0%, #8ac37d 100%)',
          borderRadius: '50% 50% 0 0 / 12% 12% 0 0',
          boxShadow: 'inset 0 0 14px rgba(255,255,255,0.65)',
          textAlign: 'center',
          pt: 10, // Adjusted padding to push content down
        }}
      >
        <Box sx={{ width: '60%', mx: 'auto', mb: 2 }}>
          <LinearProgress color="success" sx={{ borderRadius: 5, height: 6 }} />
        </Box>
        <Typography sx={{ color: 'white', fontWeight: 500, opacity: 0.8 }}>
          Tap anywhere to enter
        </Typography>
      </Box>
    </Box>
  );
}
