var mbtiEI = ['e','i']; // Extroversion - Introversion
var mbtiSN = ['s','n']; // Sensing - iNtuition
var mbtiTF = ['t','f']; // Thinking - Feeling
var mbtiJP = ['j','p']; // Judment - Perception

function rndm() {
    var rndvalEI = mbtiEI[Math.floor(Math.random()*mbtiEI.length)];
    var rndvalSN = mbtiSN[Math.floor(Math.random()*mbtiSN.length)];
    var rndvalTF = mbtiTF[Math.floor(Math.random()*mbtiTF.length)];
    var rndvalJP = mbtiJP[Math.floor(Math.random()*mbtiJP.length)];
    var rndmMBTI = rndvalEI + rndvalSN + rndvalTF + rndvalJP;
    State.variables.rndmMBTI = rndmMBTI;
    console.log(rndmMBTI);
}
rndm();

State.variables.mbtiEI = mbtiEI;
State.variables.mbtiSN = mbtiSN;
State.variables.mbtiTF = mbtiTF;
State.variables.mbtiJP = mbtiJP;