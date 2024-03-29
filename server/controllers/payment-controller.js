
import paytmchecksum from '../paytm/PaytmChecksum.js'
import { paytmMerchantKey, paytmParams } from '../index.js'

export const addPaymentGateway = async(request, response) => {
    try {
        let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum   
        }
        response.status(200).json(params)
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}