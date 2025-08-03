import bcrypt from 'bcryptjs';

export const hashPassWord = async( password)=>{
    const salt = await bcrypt.genSalt(10);
    const hashPassWord = await bcrypt.hash(password, salt);
    return hashPassWord;
}

export const comparePassword = async(password, hashedPassWord)=>{
    const isMatch = await bcrypt.compare(password, hashedPassWord);
    return isMatch ;
}

















