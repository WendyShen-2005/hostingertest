import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    getMeow(): string {
        let random = Math.floor(Math.random()*10);
        let res = `${random}`;
        switch(random) {
            case 0:
                res += "Meow, world";
                break;
            case 1:
                res += "meow world :(";
                break;
            case 2:
                res += "now world?????"
                break;
            case 3:
                res += "go kys!!!! (in minecraft)"
                break;
            case 4:
                res += "do not kys!!!! (irl)"
                break;
            case 5:
                res += "hey hey hey";
                break;
            case 6:
                res += "Hello world :)";
                break;
            case 7:
                res += "Bark bark bark (delicious)";
                break;
            case 8:
                res += "NOOOOOOOOOOOOOOOOOOOO";
                break;
            case 9:
                res += "water your petels :/";
                break;
            default:
                res += "HAIIIIIIIIIIIIII";
                break;
        }
        return res;
    }
}
