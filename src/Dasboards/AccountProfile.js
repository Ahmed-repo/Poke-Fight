import { Avatar, Typography } from "@material-ui/core";
import useAuthContext from "../hooks/useAuthContext";

const AccountProfile = (props) => {
  const { user } = useAuthContext();

  return (
    <div className="profile">
      {<Avatar aria-label="recipe">{user.name.slice(0, 1)}</Avatar>}
      <Typography color="textPrimary" variant="body1">
        {`${user.name}`}
      </Typography>
    </div>
  );
};

export default AccountProfile;
