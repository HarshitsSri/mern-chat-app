import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const recieverId = req.params.id;
        const { message } = req.body;

        let gotConverstation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        });
        if (!gotConverstation) {
            await Conversation.create({
                participants: [senderId, recieverId],
            })
        }

        const newMessage = await Message.create({
            senderId,
            recieverId,
            message
        });

        if(newMessage){
            gotConverstation.messages.push(newMessage._id);
        }
        await gotConverstation.save();
        
        //socket.io ka code ayega warna sirf load karne pe hi new messages dikhenge

        return res.status(201).json({
            message:'The message is sent successfully'
        })

    } catch (error) {
        console.log(error)

    }
}

export const getMessage= async(req,res)=>{
    const recieverId=req.params.id;
    const senderId=req.id;
    const conversation= await Conversation.findOne({
        participants:{$all:[senderId,recieverId]}
    }).populate("messages");
    
    if (!conversation) {
      return res.status(200).json({ messages: [] });
    }
    console.log(conversation);
    return res.status(201).json(conversation);
}