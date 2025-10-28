class twoip{
    constructor(){
        this.api = "https://2ip.me/service"
        this.api_2 ="https://api.2ip.me/"
        this.headers={"X-MINER-VERSION": "EXTERNAL-bc10c1fa"}
        this.wallet=null
    }
    async req(url, data,method="GET"){
    if (data) {
            method="POST"
            data = JSON.stringify(data);
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async ip_info(){
        return (await this.req(`${this.api}/privacy/privacy.php?a=check&lang=en-GB`,{"type":"provider","host":"2ip.me","timezone":-180}));
    }
    async get_ping(ip,i){
        return (await this.req(`${this.api}/ping-traceroute/ping.php?a=ping`,{"ip":ip,"i":i}));
    }
    async port_check(ip,port){
        return(await this.req(`${this.api}/port-check/portcheck.php?a=check`,{"host":ip,"port":port}))
    }
    async spam_check(ip,service){
        return (await this.req(`${this.api}/spam/spam_check.php?a=check`,{"host":ip,"server":service}));
    }
    async dns_check(host,server,type){
        return (await this.req(`${this.api}/dns-check/dns_check.php?a=check`,{"host":host,"server":server,"type":type}));
    }
    async email_info(email){
        return (await this.req(`${this.api_2}/email.json?email=${email}`));
    }
    async mac_check(mac){
        return(await this.req(`${this.api_2}/mac.json?mac=${mac}`))
    }
    async provider_check(ip){
        return (await this.req(`${this.api_2}/provider.json?ip=${ip}`));
    }
    async site_hosting(site){
        return (await this.req(`${this.api_2}/hosting.json?site=${site}`));
    }
    async geo_check(ip){
        return (await this.req(`${this.api_2}/geo.json?ip=${ip}`));
    }
}
module.exports = {twoip};
