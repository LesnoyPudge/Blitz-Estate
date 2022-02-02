// const cheerio = require('cheerio');
// const {Router} = require('express')
// const router = Router();
// const puppeteer = require('puppeteer');


// const LAUNCH_PUPPETEER_OPTS = {
//     slowMo: 100,
//     args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         '--disable-accelerated-2d-canvas',
//         '--disable-gpu',
//         '--window-size=1920x1080'
//     ]
// };

// const PAGE_PUPPETEER_OPTS = {
//     networkIdle2Timeout: 5000,
//     waitUntil: 'networkidle2',
//     timeout: 3000000,
// };


// async function getContent(url) {
//     try {
        
//         const browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
//         const page = await browser.newPage();
//         page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');
//         await page.goto(url, PAGE_PUPPETEER_OPTS);
//         const content = await page.content();
//         browser.close();
//         return content;

//     } catch (error) {
//         throw error;
//     }
// }


// router.post('/', async (req, res) => {
//     try {
//         const html = await getContent(req.body.url);
//         const $ = cheerio.load(html);
//         // const data = [];
//         console.log(req.body.url);
//         console.log(html);
        

//         let data = [];
//         $('article', html).each((i, element) => {
//             // data.push(element);
//             console.log(element);
//         });

//         console.log('article: ', $('article', html).attr('data-name', 'CardComponent'));
//         console.log(data);
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
//     }
// });

// module.exports = router;