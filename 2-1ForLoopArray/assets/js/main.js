
const imageArray = () => {
    const returnArray = [];

    for (let i = 0; i <= 100; i++) {
        if (i < 100) {
            returnArray.push(`image_00${i}.jpg`);
        }       
    }
    console.log(returnArray);
}

imageArray();