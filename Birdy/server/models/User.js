import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        login: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        picturePath: {
            type: String,
        },
        friends: {
            type: Array,
            default: [],
        },
        bio: String,
    },
);

const User = mongoose.model("User", UserSchema);
export default User;