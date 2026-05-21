import { Box, Typography, TextField, Button, IconButton } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
// import WifiIcon from "@mui/icons-material/Wifi";
// import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { useNavigate } from "react-router-dom";

/* Shared footer navigation */
import FooterNav from "../../../Footer/FooterNav.jsx";

/* Profile image */
import profilepic from "../../profile_pages/account/profilepic.png";

import { getUserSession, editUser } from "../../../../api/users";
import { useState, useEffect } from "react";

export default function AccountPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSave() {
    try {
      if (!formData.password.trim()) {
        alert("Please enter your password before saving.");
        return;
      }

      await editUser(
        formData.first_name,
        formData.last_name,
        formData.email,
        formData.password,
        formData.phone_number
      );

      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function getUser() {
      try {
        const sessionData = await getUserSession();

        setFormData({
          first_name: sessionData.user.first_name || "",
          last_name: sessionData.user.last_name || "",
          email: sessionData.user.email || "",
          phone_number: sessionData.user.phone_number || "",
          password: "",
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <Box
      sx={{
        width: 390,
        minHeight: 844,
        mx: "auto",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        color: "primary.main",
      }}
    >
      {/* ================= HEADER ================= */}
      <Box
        sx={{
          bgcolor: "secondary.main",
          px: "22px",
          pt: "24px",
          pb: "20px",
        }}
      >
        {/* Status Bar */}
        <Box
          sx={{
            height: 36,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "30px",
            px: "10px",
          }}
        >
          {/* <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#333" }}>
            9:41
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <SignalCellular4BarIcon sx={{ fontSize: 17, color: "#333" }} />
            <WifiIcon sx={{ fontSize: 17, color: "#333" }} />
            <BatteryFullIcon sx={{ fontSize: 21, color: "#333" }} />
          </Box> */}
        </Box>

        {/* Back Button + Title */}
        <Box
          sx={{
            position: "relative",
            height: 45,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => navigate("/profile")} sx={{ p: 0 }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 31, color: "primary.main" }} />
          </IconButton>

          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 32,
              fontWeight: 800,
              color: "primary.main",
              whiteSpace: "nowrap",
            }}
          >
            My Account
          </Typography>
        </Box>
      </Box>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          flexGrow: 1,
          px: "22px",
          pt: "38px",
        }}
      >
        {/* Profile Image */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: "36px" }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={profilepic}
                alt="Profile"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Edit Icon */}
            <IconButton
              onClick={() => console.log("Edit profile image")}
              sx={{
                position: "absolute",
                top: -12,
                right: -30,
                p: 0,
              }}
            >
              <EditOutlinedIcon sx={{ fontSize: 23, color: "primary.main" }} />
            </IconButton>
          </Box>
        </Box>

        {/* First + Last Name */}
        <Box sx={{ display: "flex", gap: "18px", mb: "20px" }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>First Name</Typography>
            <TextField
              fullWidth
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              sx={smallInputStyle}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Last Name</Typography>
            <TextField
              fullWidth
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              sx={smallInputStyle}
            />
          </Box>
        </Box>

        {/* Email */}
        <Box sx={{ display: "flex", gap: "18px", mb: "20px" }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={labelStyle}>Email</Typography>
            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>
        </Box>

        {/* Phone */}
        <Typography sx={labelStyle}>Phone</Typography>
        <TextField
          fullWidth
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          sx={{ ...inputStyle, mb: "16px" }}
        />

        {/* Password */}
        <Typography sx={labelStyle}>Password</Typography>
        <TextField
          fullWidth
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter new password"
          sx={{ ...inputStyle, mb: "36px" }}
        />

        {/* Save Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: "36px" }}>
          <Button
            onClick={handleSave}
            sx={{
              width: 210,
              height: 64,
              borderRadius: "30px",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontSize: 20,
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      {/* ================= FOOTER ================= */}
      <FooterNav />
    </Box>
  );
}

/* ================= INPUT LABEL STYLE ================= */
const labelStyle = {
  fontSize: 17,
  mb: "8px",
  color: "text.primary",
};

/* ================= INPUT STYLE ================= */
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: 48,
    borderRadius: "30px",
    bgcolor: "background.paper",
    fontSize: 16,

    "& fieldset": {
      borderColor: "secondary.main",
    },

    "&:hover fieldset": {
      borderColor: "background.main",
    },

    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },
  },
};

/* Small Input Style */
const smallInputStyle = {
  ...inputStyle,
};