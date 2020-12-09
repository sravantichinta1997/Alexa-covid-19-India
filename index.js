// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
var https = require('https');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome, to covid 19 India tracker. Alexa will help you to get the status of corona cases state wise.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
function httpGet1() {
  return new Promise(((resolve, reject) => {
    var options = {
        host: 'api.covid19india.org',
        port: 443,
        path: '/v3/data.json',
        method: 'GET',
    };
    
    const request = https.request(options, (response) => {
      response.setEncoding('utf8');
      let returnData = '';

      response.on('data', (chunk) => {
        returnData += chunk;
      });

      response.on('end', () => {
        resolve(JSON.parse(returnData));
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
    request.end();
  }));
}

function httpGet() {
  return new Promise(((resolve, reject) => {
    var options = {
        host: 'api.covid19india.org',
        port: 443,
        path: '/states_daily.json',
        method: 'GET',
    };
    
    const request = https.request(options, (response) => {
      response.setEncoding('utf8');
      let returnData = '';

      response.on('data', (chunk) => {
        returnData += chunk;
      });

      response.on('end', () => {
        resolve(JSON.parse(returnData));
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
    request.end();
  }));
}

     
     
  
    

const CoronaCasesOneHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CoronaCasesOne';
    },
     
   async handle(handlerInput) {
       var body2=await httpGet1();
       var body1= await httpGet();
       var otherdate1=handlerInput.requestEnvelope.request.intent.slots.dateone.value;
       console.log(otherdate1);
       var month4=otherdate1.slice(4,6);
       var month=" ";
       var date1=otherdate1.slice(6,8);
       var year1=otherdate1.slice(2,4);
       var state_name=handlerInput.requestEnvelope.request.intent.slots.states_india.value;
       var state_name_lowercase=state_name.toLowerCase();
       console.log(state_name_lowercase);
       
       var todaydate1=handlerInput.requestEnvelope.request.timestamp.slice(0,10);
       var otherdate2=otherdate1.slice(0,4)+"-"+month4+"-"+date1;
       if(todaydate1===otherdate2){
      
       switch(state_name_lowercase){
            case 'andaman and nicobar islands':
            global.confirmed=body2.AN.total.confirmed;
            global.recovered=body2.AN.total.recovered
            global.deceased=body2.AN.total.deceased;
                            break;
	    case 'andhra pradesh':
	    global.confirmed=body2.AP.total.confirmed;
            global.recovered=body2.AP.total.recovered;
            global.deceased=body2.AP.deceased;
                           break;
	    case 'arunachal Pradesh':
	    global.confirmed=body2.AR.total.confirmed;
            global.recovered=body2.AR.total.recovered;
            global.deceased=body2.AR.total.deceased;
                          break;
	    case 'assam':
	    global.confirmed=body2.AS.total.confirmed;
            global.recovered=body2.AS.total.recovered;
            global.deceased=body2.AS.total.deceased;
                          break;
	    case 'bihar':
	    global.confirmed=body2.BR.total.confirmed;
            global.recovered=body2.BR.total.recovered;
            global.deceased=body2.BR.total.deceased;
                           break;
	    case 'chhattisgarh':
	    global.confirmed=body2.CH.total.confirmed;
            global.recovered=body2.CH.total.recovered;
            global.deceased=body2.CH.total.deceased;
                          break;
	    case 'chandigarh':
	    global.confirmed=body2.CT.total.confirmed;
            global.recovered=body2.CT.total.recovered;
            global.deceased=body2.CT.total.deceased;
                          break;
	    case 'daman and diu':
	    global.confirmed=body2.DD.total.confirmed;
            global.recovered=body2.DD.total.recovered;
            global.deceased=body2.DD.total.deceased;
                            break;
	    case 'delhi':
	    global.confirmed=body2.DL.total.confirmed;
            global.recovered=body2.DL.total.recovered;
            global.deceased=body2.DL.total.deceased;
                         break;
	    case 'dadra and nagar haveli':
	    global.confirmed=body2.DN.total.confirmed;
            global.recovered=body2.DN.total.recovered;
            global.deceased=body2.DN.total.deceased;
                         break;
	    case 'goa':
	    global.confirmed=body2.GA.total.confirmed;
            global.recovered=body2.GA.total.recovered;
            global.deceased=body2.GA.total.deceased;
                          break;
	    case 'gujarat':
	    global.confirmed=body2.GJ.total.confirmed;
            global.recovered=body2.GJ.total.recovered;
            global.deceased=body2.GJ.total.deceased;
                          break;
	    case 'himachal pradesh':
	    global.confirmed=body2.HP.total.confirmed;
            global.recovered=body2.HP.total.recovered;
            global.deceased=body2.HP.total.deceased;
                         break;
	    case 'haryana':
	    global.confirmed=body2.HR.total.confirmed;
            global.recovered=body2.HR.total.recovered;
            global.deceased=body2.HR.total.deceased;
                         break;
	    case 'jharkhand':
	    global.confirmed=body2.JH.total.confirmed;
            global.recovered=body2.JH.total.recovered;
            global.deceased=body2.JH.total.deceased;
                            break;
	    case 'jammu and kashmir':
	    global.confirmed=body2.JK.total.confirmed;
            global.recovered=body2.JK.total.recovered;
            global.deceased=body2.JK.total.deceased;
                          break;
	    case 'karnataka':
	    global.confirmed=body2.KA.total.confirmed;
            global.recovered=body2.KA.total.recovered;
            global.deceased=body2.KA.total.deceased;
                           break;
	    case 'kerala':
	    global.confirmed=body2.KL.total.confirmed;
            global.recovered=body2.KL.total.recovered;
            global.deceased=body2.KL.total.deceased;
                           break;
	    case 'ladakh':
	    global.confirmed=body2.LA.total.confirmed;
            global.recovered=body2.LA.total.recovered;
            global.deceased=body2.LA.total.deceased;
                           break;
	    case 'lakshadweep':
	    global.confirmed=body2.LD.total.confirmed;
            global.recovered=body2.LD.total.recovered;
            global.deceased=body2.LD.total.deceased;
                             break;
	    case'maharashtra':
	    global.confirmed=body2.MH.total.confirmed;
            global.recovered=body2.MH.total.recovered;
            global.deceased=body2.MH.total.deceased;
			    break;
	    case 'meghalaya':
	    global.confirmed=body2.ML.total.confirmed;
            global.recovered=body2.ML.total.recovered;
            global.deceased=body2.ML.total.deceased;
                            break;
	    case 'manipur':
	    global.confirmed=body2.MN.total.confirmed;
            global.recovered=body2.MN.total.recovered;
            global.deceased=body2.MN.total.deceased;
                            break;
	    case 'madhya pradesh':
	    global.confirmed=body2.MP.total.confirmed;
            global.recovered=body2.MP.total.recovered;
            global.deceased=body2.MP.total.deceased;
                            break;
	    case 'mizoram':
	    global.confirmed=body2.MZ.total.confirmed;
            global.recovered=body2.MZ.total.recovered;
            global.deceased=body2.MZ.total.deceased;
                           break;
	    case 'nagaland':
	    global.confirmed=body2.NL.total.confirmed;
            global.recovered=body2.NL.total.recovered;
            global.deceased=body2.NL.total.deceased;
                          break;
	    case 'odisha':
	    global.confirmed=body2.OR.total.confirmed;
            global.recovered=body2.OR.total.recovered;
            global.deceased=body2.OR.total.deceased;
                          break;
	    case 'punjab':
	    global.confirmed=body2.PB.total.confirmed;
            global.recovered=body2.PB.total.recovered;
            global.deceased=body2.PB.total.deceased;
                         break;   
	    case 'puducherry':
	    global.confirmed=body2.PY.total.confirmed;
            global.recovered=body2.PY.total.recovered;
            global.deceased=body2.PY.total.deceased;
                          
                         break;  
	    case 'rajasthan':
	    global.confirmed=body2.RJ.total.confirmed;
            global.recovered=body2.RJ.total.recovered;
            global.deceased=body2.RJ.total.deceased;
                         break;
	    case 'sikkim':
	    global.confirmed=body2.SK.total.confirmed;
            global.recovered=body2.SK.total.recovered;
            global.deceased=body2.SK.total.deceased;
                          break;
	    case 'telanagana':
	    global.confirmed=body2.TG.total.confirmed;
            global.recovered=body2.TG.total.recovered;
            global.deceased=body2.TG.total.deceased;
                         break;
			case 'tamil nadu':
	    global.confirmed=body2.TN.total.confirmed;
            global.recovered=body2.TN.total.recovered;
            global.deceased=body2.TN.total.deceased;
                         break;
	    case 'tripura':
	    global.confirmed=body2.TR.total.confirmed;
            global.recovered=body2.TR.total.recovered;
            global.deceased=body2.TR.total.deceased;
                          break;
	    case 'uttar pradesh':
	    global.confirmed=body2.UP.total.confirmed;
            global.recovered=body2.UP.total.recovered;
            global.deceased=body2.UP.total.deceased;
                         break;
	    case 'uttarakhand':
	    global.confirmed=body2.UT.total.confirmed;
            global.recovered=body2.UT.total.recovered;
            global.deceased=body2.UT.total.deceased;
                         break;
	    case 'west bengal':
	    global.confirmed=body2.WB.total.confirmed;
            global.recovered=body2.WB.total.recovered;
            global.deceased=body2.WB.total.deceased;
                         break;
   
        } 
        
       const speakOutput = state_name +" total cases so far  : "+global.confirmed+", recovered  : "+global.recovered+" ,deceased  : "+global.deceased;
       
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse(); 
           
       }
       else{
       
        switch(month4){
            case '01': month='Jan';
            break;
            case '02': month='Feb';
            break;
            case '03': month='Mar';
            break;
            case '04': month='Apr';
            break;
            case '05': month='May';
            break;
            case '06': month='Jun';
            break;
            case '07': month='Jul';
            break;
            case '08': month='Aug';
            break;
            case '09': month='Sep';
            break;
            case '10': month='Oct';
            break;
            case '11': month='Nov';
            break;
            case '12': month='Dec';
            break;
        }
        
        
       
           var  num1=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999];
             global.confirmed=0;
             global.recovered=0;
             global.deceased=0;
             var otherdate=date1+'-'+month+'-'+ year1;
             console.log(otherdate);
            console.log(month);
            var i=0;
            
            for(i in num1){
              try{
                  
            if(body1.states_daily[i].date===otherdate && body1.states_daily[i].status==="Confirmed"){
            global.confirmed1=body1.states_daily[i];
           
    
            } 
            }
            catch(TypeError){
              var b=10;
              }
              
              try{
            if(body1.states_daily[i].date===otherdate&& body1.states_daily[i].status==="Recovered"){
            global.recovered1=body1.states_daily[i];
            } }
            catch(TypeError){
              var f=10;
              }
     try{
            if(body1.states_daily[i].date===otherdate && body1.states_daily[i].status==="Deceased"){
            global.deceased1=body1.states_daily[i];
            } }
            catch(TypeError){
              b=10;
              }
            
            }
       console.log(state_name);
      switch(state_name_lowercase){
            case 'andaman and nicobar islands':
            global.confirmed=global.confirmed1.an;
            global.recovered=global.recovered1.an;
            global.deceased=global.deceased1.an;
                            break;
			case 'andhra pradesh':
			global.confirmed=global.confirmed1.ap;
            global.recovered=global.recovered1.ap;
            global.deceased=global.deceased1.ap;
                           break;
			case 'arunachal pradesh':
			global.confirmed=global.confirmed1.ar;
            global.recovered=global.recovered1.ar;
            global.deceased=global.deceased1.ar;
                          break;
			case 'assam':
			global.confirmed=global.confirmed1.as;
            global.recovered=global.recovered1.as;
            global.deceased=global.deceased1.as;
                          break;
			case 'bihar':
			global.confirmed=global.confirmed1.br;
            global.recovered=global.recovered1.br;
            global.deceased=global.deceased1.br;
                           break;
			case 'chhattisgarh':
			global.confirmed=global.confirmed1.ch;
            global.recovered=global.recovered1.ch;
            global.deceased=global.deceased1.ch;
                          break;
			case 'chandigarh':
			global.confirmed=global.confirmed1.ct;
            global.recovered=global.recovered1.ct;
            global.deceased=global.deceased1.ct;
                          break;
			case 'daman and diu':
			global.confirmed=global.confirmed1.dd;
            global.recovered=global.recovered1.dd;
            global.deceased=global.deceased1.dd;
                            break;
			case 'delhi':
			global.confirmed=global.confirmed1.dl;
            global.recovered=global.recovered1.dl;
            global.deceased=global.deceased1.dl;
                         break;
			case 'dadra and nagar haveli':
			global.confirmed=global.confirmed1.dn;
            global.recovered=global.recovered1.dn;
            global.deceased=global.deceased1.dn;
                         break;
			case 'goa':
			global.confirmed=global.confirmed1.ga;
            global.recovered=global.recovered1.ga;
            global.deceased=global.deceased1.ga;
                          break;
			case 'gujarat':
			global.confirmed=global.confirmed1.gj;
            global.recovered=global.recovered1.gj;
            global.deceased=global.deceased1.gj;
                          break;
			case 'himachal pradesh':
			global.confirmed=global.confirmed1.hp;
            global.recovered=global.recovered1.hp;
            global.deceased=global.deceased1.hp;
                         break;
			case 'haryana':
			global.confirmed=global.confirmed1.hr;
            global.recovered=global.recovered1.hr;
            global.deceased=global.deceased1.hr;
                         break;
			case 'jharkhand':
			global.confirmed=global.confirmed1.jh;
            global.recovered=global.recovered1.jh;
            global.deceased=global.deceased1.jh;
                            break;
			case 'jammu and kashmir':
			global.confirmed=global.confirmed1.jk;
            global.recovered=global.recovered1.jk;
            global.deceased=global.deceased1.jk;
                          break;
			case 'karnataka':
			global.confirmed=global.confirmed1.ka;
            global.recovered=global.recovered1.ka;
            global.deceased=global.deceased1.ka;
                           break;
			case 'kerala':
			global.confirmed=global.confirmed1.kl;
            global.recovered=global.recovered1.kl;
            global.deceased=global.deceased1.kl;
                           break;
			case 'ladakh':
			global.confirmed=global.confirmed1.la;
            global.recovered=global.recovered1.la;
            global.deceased=global.deceased1.la;
                           break;
			case 'lakshadweep':
			global.confirmed=global.confirmed1.ld;
            global.recovered=global.recovered1.ld;
            global.deceased=global.deceased1.ld;
                             break;
			case'maharashtra':
			global.confirmed=global.confirmed1.mh;
            global.recovered=global.recovered1.mh;
            global.deceased=global.deceased1.mh;
			
                            break;
			case 'meghalaya':
			global.confirmed=global.confirmed1.ml;
            global.recovered=global.recovered1.ml;
            global.deceased=global.deceased1.ml;
                            break;
			case 'manipur':
			global.confirmed=global.confirmed1.mn;
            global.recovered=global.recovered1.mn;
            global.deceased=global.deceased1.mn;
                            break;
			case 'madhya pradesh':
			global.confirmed=global.confirmed1.mp;
            global.recovered=global.recovered1.mp;
            global.deceased=global.deceased1.mp;
                            break;
			case 'mizoram':
			global.confirmed=global.confirmed1.mz;
            global.recovered=global.recovered1.mz;
            global.deceased=global.deceased1.mz;
                           break;
			case 'nagaland':
			global.confirmed=global.confirmed1.nl;
            global.recovered=global.recovered1.nl;
            global.deceased=global.deceased1.nl;
                          break;
			case 'odisha':
			global.confirmed=global.confirmed1.or;
            global.recovered=global.recovered1.or;
            global.deceased=global.deceased1.or;
                          break;
			case 'punjab':
			global.confirmed=global.confirmed1.pb;
            global.recovered=global.recovered1.pb;
            global.deceased=global.deceased1.pb;
                         break;   
			case 'puducherry':
			global.confirmed=global.confirmed1.py;
            global.recovered=global.recovered1.py;
            global.deceased=global.deceased1.py;
                          
                         break;  
			case 'rajasthan':
			global.confirmed=global.confirmed1.rj;
            global.recovered=global.recovered1.rj;
            global.deceased=global.deceased1.rj;
                         break;
			case 'sikkim':
			global.confirmed=global.confirmed1.sk;
            global.recovered=global.recovered1.sk;
            global.deceased=global.deceased1.sk;
                          break;
			case 'telanagana':
			global.confirmed=global.confirmed1.tg;
            global.recovered=global.recovered1.tg;
            global.deceased=global.deceased1.tg;
                         break;
			case 'tamil nadu':
			global.confirmed=global.confirmed1.tn;
            global.recovered=global.recovered1.tn;
            global.deceased=global.deceased1.tn;
                         break;
			case 'tripura':
			global.confirmed=global.confirmed1.tr;
            global.recovered=global.recovered1.tr;
            global.deceased=global.deceased1.tr;
                          break;
			case 'uttar pradesh':
			global.confirmed=global.confirmed1.up;
            global.recovered=global.recovered1.up;
            global.deceased=global.deceased1.up;
                         break;
			case 'uttarakhand':
			global.confirmed=global.confirmed1.ut;
            global.recovered=global.recovered1.ut;
            global.deceased=global.deceased1.ut;
                         break;
			case 'west bengal':
			global.confirmed=global.confirmed1.wb;
            global.recovered=global.recovered1.wb;
            global.deceased=global.deceased1.wb;
                         break;
   
        } 
        
        const speakOutput = "In the state of " +state_name +" the new cases on   : " +otherdate2 + " are : " +global.confirmed+ ",  recovered cases are  : "+global.recovered+" , deceased are  : "+global.deceased;
       
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
   }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World,I hope that you are safe ,wash your hands and wear masks';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('I hope that you are safe ,wash your hands and wear masks')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say open covid india';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye! Have a great day ahead. India will fight back Covid 19';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        CoronaCasesOneHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
