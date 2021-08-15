import got from 'got';
import terminalImage from 'terminal-image';

(async () => {
  {
    // show image 1
    const bf = await got(
      'https://c4.wallpaperflare.com/wallpaper/304/829/176/asian-female-girl-model-wallpaper-preview.jpg'
    ).buffer();

    console.log(await terminalImage.buffer(bf, { width: '50%', height: null }));
  }

  {
    // show image 2
    const bf = await got(
      'https://koreabanget88.files.wordpress.com/2011/03/korean-girls-hwang-mi-hee21.jpg'
    ).buffer();

    console.log(await terminalImage.buffer(bf, { width: '50%', height: null }));
  }
})();
