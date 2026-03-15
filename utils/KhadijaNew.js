
export const KhadijaNew = (message) => {

    if (!message) return null;

    const content = message.viewOnceMessageV2?.message || message;
    
    return content;
}

export default  KhadijaNew;
