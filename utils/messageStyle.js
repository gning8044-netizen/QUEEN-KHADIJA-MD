import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "Lumina Md",
        body: "𝐈𝐒 SHADOW 𝐓𝐄𝐂𝐇",
        thumbnail: fs.readFileSync("./database/Lumix.jpg"),
        sourceUrl: "https://chat.whatsapp.com/KfYnvgj0JTqErxKc0RTNNu",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
