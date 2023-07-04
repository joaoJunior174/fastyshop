export const buildPagarmeHeader = (key: string) => {
    
    return { 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'basic ' + Buffer.from(key+":").toString('base64')
        } 
    }
}