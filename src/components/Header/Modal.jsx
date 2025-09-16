import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import TelegramIcon from "@mui/icons-material/Telegram";

const Modal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 820,
    Height: 235,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    border: "none",
  };

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          style={{
            fontSize: "clamp(16px, 2vw, 26px)",
            fontWeight: "600",
            textAlign: "center",
            color: "#295093",
          }}
        >
          Подписывайтесь на наш канал в Telegram <br /> и будьте всегда в курсе
          самых последних новостей:{" "}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              width: "223px",
              height: "61px",
              borderRadius: "5px",
              background: "linear-gradient(90deg, #1E96C8 0%, #37AEE2 100%)",
              border: "none",
              color: "white",
              fontSize: "24px",
              fontWeight: "500",
              hover: {
                background: "linear-gradient(90deg, #1E96C8 0%, #37AEE2 100%)",
              },
            }}
            className="follow_button_modal"
          >
            {" "}
            <TelegramIcon style={{ fontSize: "30px" }} /> Подписаться
          </button>{" "}
        </Typography>
      </Box>
    </MuiModal>
  );
};

export default Modal;
