import { MoreVert } from "@mui/icons-material";
import { Box, Button, Popover } from "@mui/material";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  word: {
    en: string;
  };
}

export const PopoverMenu: React.FC<Props> = ({ word }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handleClick}>
        <MoreVert />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box p={2} className="flex flex-col gap-2">
          <Button
            className="flex gap-2 items-center"
            onClick={() => console.log("Edit", word.en)}
            size="small"
          >
            <LuPencil />
            <span>Edit</span>
          </Button>
          <Button
            className="flex gap-2 items-center"
            onClick={() => console.log("Delete", word.en)}
            size="small"
            color="error"
          >
            <RiDeleteBin6Line />
            <span>Delete</span>
          </Button>
        </Box>
      </Popover>
    </>
  );
};
