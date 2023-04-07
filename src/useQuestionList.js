import { useState } from 'react'

import nonDecrementalConduction from './img/answer/nonDecrementalConduction.png'
import retinalGanglion from './img/answer/retinalGanglion.png'
import unidirectionalConduction from './img/answer/unidirectionalConduction.png'
import basalGangliaSystems from './img/answer/basalGangliaSystems.png'
import exam20172 from './img/question/exam20172.png'
import typeOfAmygdala from './img/answer/typeOfAmygdala.png'
import kluverBucy from './img/answer/kluverBucy.png'
import exam20171 from './img/question/exam20171.png'
import monoamineCholine from './img/answer/monoamineCholine.png'
import differencesNonREMtoREM from './img/answer/differencesNonREMtoREM.png'
import exam20164 from './img/question/exam20164.png'
import rewardCycle from './img/answer/rewardCycle.png'
import pleasureSignal from './img/answer/pleasureSignal.png'
import dopamine from './img/answer/dopamine.png'
import varietyMotorArea from './img/answer/varietyMotorArea.png'
import planningAction from './img/answer/planningAction.png'
import hippocampusKO from './img/answer/hippocampusKO.png'
import exam20163 from './img/question/exam20163.png'
import servo from './img/answer/servo.png'
import exam20162 from './img/question/exam20162.png'
import exam20161 from './img/question/exam20161.png'
import PTP from './img/answer/PTP.png'
import LTPfeature from './img/answer/LTPfeature.png'
import fearConditioning from './img/answer/fearConditioning.png'
import exam20213 from './img/question/exam20213.png'
import exam20201 from './img/question/exam20201.png'
import motorNeuron from './img/answer/motorNeuron.png'
import recycleNeurotransmitter from './img/answer/recycleNeurotransmitter.png'
import stretchReflex from './img/answer/stretchReflex.png'
import NMJ from './img/answer/NMJ.png'
import skeletalMuscle from './img/answer/skeletalMuscle.png'
import excitationContractionCoupling from './img/answer/excitationContractionCoupling.png'
import alphaGammaLinkage from './img/answer/alphaGammaLinkage.png'
import electromyogram from './img/answer/electromyogram.png'
import exam20202 from './img/question/exam20202.png'
import sensoryReceptors from './img/answer/sensoryReceptors.png'
import photoreception from './img/answer/photoreception.png'
import nociception from './img/answer/nociception.png'
import hairCell from './img/answer/hairCell.png'
import dermatome from './img/answer/dermatome.png'
import exam20203 from './img/question/exam20203.png'
import mGluR6 from './img/answer/mGluR6.png'
import sensitization from './img/answer/sensitization.png'
import prismAdaptation from './img/answer/prismAdaptation.png'
import motorLearning from './img/answer/motorLearning.png'
import LTP from './img/answer/LTP.png'
import LTD from './img/answer/LTD.png'
import longMemory from './img/answer/longMemory.png'
import basalGanglia from './img/answer/basalGanglia.png'
import exam20204 from './img/question/exam20204.png'
import associationArea from './img/answer/associationArea.png'
import taste from './img/answer/taste.png'
import sleepingData from './img/answer/sleepingData.png'
import olfactory from './img/answer/olfactory.png'
import EEG from './img/answer/EEG.png'
import circadianClockControl from './img/answer/circadianClockControl.png'
import sarcomere from './img/answer/sarcomere.png'
import lightReflex from './img/answer/lightReflex.png'
import aphasia from './img/answer/aphasia.png'
import typeOfMuscle from './img/answer/typeOfMuscle.png'
import tetanus from './img/answer/tetanus.png'
import conduction from './img/answer/conduction.png'
import cerebralCortex from './img/answer/cerebralCortex.png'
import actionPotential from './img/answer/actionPotential.png'
import PIPathway from './img/answer/PIPathway.png'
import neuronDiameter from './img/answer/neuronDiameter.png'
import myelin from './img/answer/myelin.png'
import mechanoreceptor from './img/answer/mechanoreceptor.png'
import column from './img/answer/column.png'
import cAMP from './img/answer/cAMP.png'
import olfactorySynapse from './img/answer/olfactorySynapse.png'
import olfactoryExam from './img/answer/olfactoryExam.png'
import exam20211 from './img/question/exam20211.png'
import tasteBuds from './img/answer/tasteBuds.png'
import visualPathway from './img/answer/visualPathway.png'
import retina from './img/answer/retina.png'
import opticReceptor from './img/answer/opticReceptor.png'
import opticPathway from './img/answer/opticPathway.png'
import VOR from './img/answer/VOR.png'
import tonotopy from './img/answer/tonotopy.png'
import MSOlive from './img/answer/MSOlive.png'
import COWS from './img/answer/COWS.png'
import toroponin from './img/answer/toroponin.png'
import tendonReflex from './img/answer/tendonReflex.png'
import pupillaryLightReflex from './img/answer/pupillaryLightReflex.png'
import PTN from './img/answer/PTN.png'
import eyeMovement from './img/answer/eyeMovement.png'
import cerebellum from './img/answer/cerebellum.png'
import reinforcementLearning from './img/answer/reinforcementLearning.png'
import microZone from './img/answer/microZone.png'
import cerebellumLearning from './img/answer/cerebellumLearning.png'
import BrodmannArea from './img/answer/BrodmannArea.png'
import emotion from './img/answer/emotion.png'
import drugDependence from './img/answer/drugDependence.png'
import feedingCenter from './img/answer/feedingCenter.png'
import drinkingBehaviorICF from './img/answer/drinkingBehaviorICF.png'
import drinkingBehaviorECF from './img/answer/drinkingBehaviorECF.png'
import exam20212 from './img/question/exam20212.png'
import maleAction from './img/answer/maleAction.png'
import kisspeptin from './img/answer/kisspeptin.png'
import humanGender from './img/answer/humanGender.png'
import foodCenter from './img/answer/foodCenter.png'
import femaleAction from './img/answer/femaleAction.png'
import SCN from './img/answer/SCN.png'
import PGDPGE2 from './img/answer/PGDPGE2.png'
import narcolepsy4 from './img/answer/narcolepsy4.png'
import narcolepsy3 from './img/answer/narcolepsy3.png'
import narcolepsy2 from './img/answer/narcolepsy2.png'
import narcolepsy from './img/answer/narcolepsy.png'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const appName = 'anywhere-physiology1'
  const jpName = '第一生理学'
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2021本試',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '活動電位の発生について、脱分極してから静止電位に戻るまでの過程を説明しなさい。',
          answerImg: [actionPotential],
          answer:
            '脱分極を誘導した電位依存性Na⁺チャネルがすぐに不活化され、電位依存性（遅延整流性）K⁺チャネルが開き、再分極し静止電位付近に戻る。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'アセチルコリンを合成する酵素は( 1 )、分解する酵素は( 2 )である。また、グルタミン酸を除去するものは( 3 )である。',
          answerImg: [recycleNeurotransmitter],
          answer:
            '(1)コリンアセチルトランスフェラーゼ、(2)アセチルコリンエステラーゼ、(3)グルタミン酸トランスポーター',
          commentary:
            'アセチルコリン（とモノアミンの一部）のみコリンへ分解されて再合成される。グルタミン酸・GABA・グリシン・モノアミンはトランスポーター（膜輸送体）により細胞内へ輸送され、再び小胞体へ蓄えられる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞内シグナル伝達のcAMP経路について、リガンドが結合してから特定のタンパク質がリン酸化されるまでの過程を説明しなさい。',
          answerImg: [cAMP],
          answer:
            'Gsのαサブユニットがアデニル酸シクラーゼを刺激し、アデニル酸シクラーゼによってcAMPが産生される。cAMPによりcAMP依存性プロテインキナーゼA(PKA)が活性化され、PKAがタンパク質のセリンやトレオニン残基に特異的に作用してリン酸化を行う。',
          commentary:
            'アデニル酸シクラーゼACを活性化するGタンパク質はGs。cAMPはセカンドメッセンジャー。リン酸化により遺伝子転写や、酵素活性などが調節される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞内シグナル伝達のホスファチジルイノシトール経路について、リガンドが結合してから小胞体よりカルシウムイオンが放出されるまでの過程を説明しなさい。',
          answerImg: [PIPathway],
          answer:
            'GqなどのαサブユニットがホスホリパーゼC(PLC)を活性化し、PLCがイノシトールリン脂質をイノシトール3リン酸とジアシルグリセロールに加水分解する（ PIP₂ → IP₃ + DG ）。このうちIP₃が小胞体のIP₃受容体に結合することで、小胞体内から細胞質へCa²⁺が放出される。',
          commentary:
            'ホスホリパーゼCを活性化するGタンパク質はGq,G11。加水分解されたDGはCa²⁺とともにプロテインキナーゼC(PKC)を活性化する。→カルモジュリン依存性キナーゼとPKCが標的タンパク質をリン酸化することで生理作用を発揮する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '有髄神経線維でのみ生じる活動電位の素早い伝導は何か。また、末梢神経系の髄鞘を形成するグリア細胞は何か。',
          answerImg: [myelin],
          answer: '跳躍伝導、シュワン細胞',
          commentary:
            '中枢神経系の髄鞘はオリゴデンドロサイト（1対多）、末梢神経系ではシュワン細胞（1対1）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】皮膚感覚受容器は( 1 )と( 2 )により分類することができる。( 1 )が早いものはRA、遅いものはSAである。また、( 2 )が狭いものがⅠ型、広いものがⅡ型である。皮膚の機械受容器を分類すると、RA1は( 3 )、RA2は( 4 )、SA1は( 5 )、SA2は( 6 )があてはまる。',
          answerImg: [mechanoreceptor],
          answer:
            '(1)順応　(2)受容野　(3)マイスネル小体　(4)パチニ小体　(5)メルケル細胞　(6)ルフィニ小体',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】皮膚感覚受容器は適刺激によって、機械受容器・温度受容器・侵害受容器に分類することもできる。このうち、温度受容器には( 7 )チャネルが存在し、温度受容に関与する。(7)チャネルは温度だけでなく、( 8 )にも反応する。',
          answerImg: [nociception],
          answer: '(7)TRP、(8)化学物質',
          commentary:
            'TRPチャネルは温度や化学物質に反応するイオンチャネル。侵害受容器には他にもNa⁺チャネル、ATP受容体（組織障害にともない末梢細胞から放出されるATPで活性化）が発現している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '体性感覚は( 1 )と( 2 )に分類することができる。',
          answerImg: [],
          answer: '表在感覚、深部感覚',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '一次体性感覚野の機能単位は何か',
          answerImg: [column],
          answer: '円柱構造（コラム）',
          commentary:
            '一次体性感覚野は中心後回ともよばれる。体部位局在性がある。視床からの入力は皮質Ⅳ層（やⅤ層）へ投射される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】痛みに関して、受容野が狭く、痛みがどこにあるのかを知らせる( 1 )ニューロンと、痛みの強度を知らせる( 2 )ニューロンが存在する。',
          answerImg: [nociception],
          answer: '(1)特異的侵害受容　(2)広作動域',
          commentary:
            '特異的侵害受容ニューロンNociceptive specific neuron(NS)は受容野が狭く、痛みがどこにあるのか知らせる（皮膚と内臓からの入力が収束するので、関連痛を引き起こす）。広作動域ニューロンWide dynamic range neuron(WDR)は痛みの強度を知らせる（繰り返し刺激により中枢性感作ワインドアップが生じる）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】侵害刺激を受けると、まず機械受容器や温度受容器から( 3 )線維によって刺激が伝達され、鋭い痛みを感じる。その後、ポリモーダル侵害受容器から( 4 )線維によって刺激が伝達され、より持続性のうずくような( 5 )を感じる。また、内臓の痛みを同じ脊髄に入力する( 6 )内の皮膚の痛みとして感じることがある。これを( 7 )という。',
          answerImg: [nociception, neuronDiameter],
          answer: '(3)Aδ　(4)C　(5)二次痛　(6)デルマトーム　(7)関連痛',
          commentary:
            'A線維は有髄（αほど太く、δほど細い）、C線維は無髄。一次痛は鋭く、素早い痛みで、二次痛は持続的でうずくような、ときに灼熱痛と形容される疼痛。',
        },
        {
          detailInfo: '',
          questionImg: [exam20211],
          questionSentence:
            '【嗅細胞における受容器電位発生メカニズムを説明する図を参考に、空欄を埋めて文章を完成させなさい。アルファベットは図中と一致している。】　におい分子が受容体タンパク質（R）に受容され、これとカップルしている( a )が活性化される。この活性化は次に( b )に伝えられ、その結果、ATPから( c )が生まれる。(c)は、細胞膜に存在している( d )に直接働きかけて開口させることにより細胞内へ( e )や( f )が流入し、細胞を電気的に興奮させる。その(f)は( g )を活性化する。その結果、( h )が細胞外へ流出して受容器電位応答を増幅する。',
          answerImg: [olfactory],
          answer:
            '(a)Gタンパク質/Golf　(b)アデニル酸シクラーゼ　(c)cAMP　(d)cAMP作動性カチオンチャネル　(e)Na⁺　(f)Ca²⁺　(g)Cl⁻チャネル　(h)Cl⁻　',
          commentary:
            '嗅細胞ではGPCRがセカンドメッセンジャーであるcAMPを産生し、直接非選択性陽イオンチャネルを活性化する。個々のにおい分子に応答する受容体の組み合わせパターンの違いで、多くのにおいを識別している',
        },
        {
          detailInfo: '',
          questionImg: [olfactory],
          questionSentence:
            '図を参考に、嗅覚の順応のメカニズムを説明しなさい。また、順応の意義とは何か。',
          answerImg: [],
          answer:
            '【メカニズム】cAMP作動性カチオンチャネルから流入したCa²⁺がアデニル酸シクラーゼ活性を抑制したり、cAMPを分解する酵素PDEの活性を促進したり、イオンチャネルを細胞内から抑制したりすることによって、電流応答が減弱（順応）していく。【順応の意義】感度を下げずに感覚細胞のダイナミックレンジを広くすることで、濃度の高いにおいの中でも通常の濃度の時と同じように細かいにおいの変化をすぐに感知し、周囲の環境の変化をすぐに知ることで危険を回避することができる。',
          commentary:
            '感覚順応により、幅広い（100倍近い）濃度の差でも、感度を変えずに濃度の違いを認識する事ができる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '正しいものを選べ。',
          choices: [
            '１つのにおい分子が１種の受容体に結合する。',
            'ある受容細胞には複数の受容体が存在する。',
            '１つの受容体が複数のにおい分子に結合する。',
          ],
          answerImg: [olfactorySynapse],
          answer: '１つの受容体が複数のにおい分子に結合する。',
          commentary:
            '嗅細胞の嗅覚受容体はヒトの場合約350種類で構成されるが、それでも1万～10万種を超えるにおい分子を特定するには足りない。→（介在ニューロンの側方抑制などにより）応答する受容体の組み合わせパターンの違いによって、多くのにおいを識別している',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '嗅細胞において、におい刺激を与えた際に受容器電位が最も大きくなるのは、嗅細胞のどの位置に刺激を与えたときか。',
          answerImg: [olfactoryExam],
          answer: '線毛/繊毛',
          commentary:
            '嗅細胞のcAMP依存性陽イオンチャネルが繊毛部分に局在している→嗅覚受容体もおそらく繊毛部分に局在している。鼻腔では表面を粘膜が覆っており、嗅線毛はその中で浮いているためにおい分子をキャッチしやすい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】味受容器である( 1 )には味細胞と( 2 )が存在する。味受容体は味細胞の( 3 )部位に存在する。',
          answerImg: [tasteBuds],
          answer: '(1)味蕾　(2)基底細胞　(3)微絨毛　',
          commentary:
            '個々の味蕾は50~100個の味細胞taste cellと基底細胞で構成され、つぼみ（蕾）のような形を呈する。味細胞は基底細胞から分化し、約10日で新しい細胞と置き換わる。',
        },
        {
          detailInfo: '',
          questionImg: [tasteBuds],
          questionSentence:
            '【空欄を埋めよ】味細胞は大きくⅠ～Ⅳ型の細胞に分類される。Ⅰ型は支持細胞として他の細胞の機能を補助する。Ⅱ型細胞とⅢ型細胞は味細胞である。Ⅱ型細胞の受容体のタイプは( 4 )受容体か代謝型( 5 )受容体であり、( 6 )味、( 7 )味、( 8 )味を検出し、味刺激により放出する伝達物質は( 9 )である。一方、Ⅲ型細胞は( 10 )味と( 11 )味を検出するが、その際、味物質がイオンチャネルに直接作用する。Ⅲ型細胞は伝達物質として( 12 )を放出する。Ⅳ型の細胞はⅠ～Ⅲ型の細胞の前駆細胞である。',
          answerImg: [taste],
          answer:
            '(4)Gタンパク共役型/GPCR　(5)グルタミン酸　(6)(7)(8)甘味・苦味・旨味　(9)ATP　(10)(11)塩味・酸味　(12)セロトニン',
          commentary:
            '甘味・苦味・旨味はイオンチャネル型ではなく代謝型受容体で、共役するGタンパク質はGα-gust(α-ガストデューシン)。旨味受容体はアミノ酸のなかでもグルタミン酸に強く応答する。味細胞から味神経線維へのシナプス伝達にはセロトニンが使われ、味蕾中のⅡ型細胞が味刺激に応答して放出したATPを、Ⅲ型細胞が受容して活性化され、Ⅲ型細胞が主にセロトニンを放出することで味神経線維を活性化する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '間違っているものを選べ',
          choices: [
            '甘味は代謝型受容体である',
            '苦味は代謝型受容体である',
            '酸味はイオンチャネル型受容体である',
            '旨味はイオンチャネル型受容体である',
            '塩味はイオンチャネル型受容体である',
          ],
          answerImg: [taste],
          answer: '旨味はイオンチャネル型受容体である',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '味の情報伝達がにおいの情報伝達よりも複雑だといわれる理由について記述せよ。',
          answerImg: [olfactorySynapse, tasteBuds],
          answer:
            'におい分子に対応する嗅細胞が嗅球で統合・調節されて、におい情報が神経へ伝達されるのに対して、味細胞はそれぞれの細胞で味質に対する応答性に違いがあったり、複数の味質に応答するものがあったりする上、一つの味蕾にある複数種類の味細胞が協調して活性化するから。',
          commentary:
            '参考：ラベルドライン理論（特異的な味覚情報を送る）、アクロスファイバー理論（複雑な味覚情報を送る）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】網膜から大脳皮質へ至る経路のうち、一次視覚野へ投射するものを( 1 )、上丘から視床枕を経て主に一次視覚野以外の視覚野へ至るものを( 2 )という。',
          answerImg: [opticPathway],
          answer: '(1)膝状体視覚系路　(2)膝状体外視覚系路',
          commentary:
            '膝状体視覚系路は、光刺激を網膜→視床（外側膝状体）→一次視覚野→高次視覚野の経路で伝える。主に視覚情報を認知・認識するための経路。膝状体外視覚系路は網膜→上丘→視床枕→一次視覚野以外の視覚野の経路で、眼球運動などへ利用される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '杆体が光を吸収すると、( 1 )がメタロドプシンⅡに変化し、メタロドプシンⅡがトランスデューシンの( 2 )を( 3 )に変えることでトランスデューシンが活性化する。活性化したトランスデューシンにより( 4 )が活性化され、( 5 )が加水分解される。細胞内の(5)濃度の低下により(5)依存性チャネルが閉じ、杆体は( 6 )応答を示す。オン型双極細胞では視細胞からの( 7 )放出減少によりmGluR6活性が下がり、Gタンパク質が不活性化する。それにより( 8 )が開き、( 9 )する。',
          answerImg: [opticReceptor, retina],
          answer:
            '(1)ロドプシン　(2)GDP　(3)GTP　(4)ホスホジエステラーゼ/PDE　(5)cGMP　(6)過分極　(7)グルタミン酸　(8)TRPM₁チャネル　(9)脱分極',
          commentary:
            '視細胞は光刺激を受けると過分極し、グルタミン酸放出を減少させる。オン型双極細胞は光がオンのとき、代謝型グルタミン酸受容体mGluR6の作用により脱分極を起こす。反対に、オフ型双極細胞は光がオフのときにイオンチャネル型グルタミン酸受容体iGluRの働きにより脱分極を起こす（光がオンだと過分極する）。トランスデューシンとはGタンパク質の一種で、活性化されるとホスホジエステラーゼPDEを活性化する。ホスホジエステラーゼはcGMPの分解酵素。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '一次視覚野から高次視覚野への経路のうち、頭頂皮質へ向かう経路は( 1 )であり、視覚対象の( 2 )や( 3 )を知るための情報を処理する。下側頭皮質へ向かう経路は( 4 )であり、視覚対象の( 5 )や( 6 )を知るための情報を処理する。',
          answerImg: [visualPathway],
          answer:
            '(1)背側経路/頭頂葉経路　(2)(3)位置・動き　(4)腹側経路/側頭葉経路　(5)(6)形・色',
          commentary:
            '背側経路（頭頂皮質へ向かう経路）は空間視経路とも呼ばれ、視覚対象の位置や動きを知るための情報を処理している。腹側経路（下側頭皮質へ向かう経路）は物体視経路ともよばれ、物体の形や色など、視覚対象が何であるかを知るための情報を処理している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【】部分が正しい場合には〇を、間違っている場合には正しい語句をかけ。）有毛細胞は機械受容器チャネルを介して【Na⁺が流入】することにより脱分極する。',
          answerImg: [hairCell],
          answer: 'K⁺が流入',
          commentary:
            '内リンパ液は高K⁺・低Na⁺・低Ca²⁺であり、基底膜が振動すると有毛細胞の不動毛の先端のチャネルが開き、K⁺が流入する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【】部分が正しい場合には〇を、間違っている場合には正しい語句をかけ。）内側上オリーブ核は遅延回路を使って【両耳間強度差】を検出する',
          answerImg: [MSOlive],
          answer: '両耳間時間差ITD',
          commentary: '両耳間強度差は外側上オリーブ核LSOのはたらき',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【】部分が正しい場合には〇を、間違っている場合には正しい語句をかけ。）蝸牛の有毛細胞は【不動毛側】に傾くと脱分極する。',
          answerImg: [hairCell],
          answer: '基底小体の方向/適方向',
          commentary:
            '有毛細胞の感覚毛は、全体の方向性を決定する1本の長い動毛と、動毛を頂点として規則的に配列する50~100本の不動毛からなる。蝸牛の有毛細胞では動毛は退化し原器である基底小体のみ存在する。有毛細胞は、すべて動毛/基底小体の方向（→適方向）に屈曲したときにMETチャネルが開き脱分極し、逆方向に屈曲したときに過分極する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【】部分が正しい場合には〇を、間違っている場合には正しい語句をかけ。）前庭動眼反射によって頭部の回転と【同じ方向】へ眼が回転する',
          answerImg: [VOR],
          answer: '逆方向',
          commentary:
            '視線を保持するため、頭の回転とは逆方向に眼を回転させる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【】部分が正しい場合には〇を、間違っている場合には正しい語句をかけ。）右耳に冷水を注入するとカロリック反応により【右向き】に眼振が生じる',
          answerImg: [COWS],
          answer: '左向き',
          commentary: 'COWS',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【】部分が正しい場合には〇を、間違っている場合には正しい語句をかけ。）音の周波数局在は【下丘から大脳皮質】に至るまでみられる。',
          answerImg: [tonotopy],
          answer: '蝸牛から大脳皮質',
          commentary:
            '全ての聴覚信号は下丘を通して伝わるが、周波数局在性は蝸牛から大脳皮質にかけて（聴覚伝導路すべてで）存在している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】蝸牛の( 1 ) の感覚毛は( 2 )の( 3 )に浸かっており、細胞体は( 4 )中にある。(1)が脱分極すると、電位依存性のチャネルが開くことで( 5 )が細胞内に流入し、シナプス小胞からの神経伝達物質放出を促す。蝸牛において各周波数の刺激は基底板の固有の位置で最大の振幅を生じる。底部では( 6 ) を、頂部では( 7 )を感知している',
          answerImg: [],
          answer:
            '(1)有毛細胞　(2)中心階　(3)内リンパ液　(4)外リンパ液　(5)Ca²⁺　(6)高周波音　(7)低周波音',
          commentary:
            '内リンパ液はK⁺が豊富でCa²⁺が少ないため、感覚毛のMETチャネルには好都合で細胞体の電位依存性Ca²⁺チャネルには適さない。有毛細胞はらせん神経節ニューロンにシナプスし、聴覚伝導路に伝えられる。各周波数の刺激に対する感度は基底板の性質の他、外有毛細胞による側方抑制によっても強調される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '活動電位が伝わってから骨格筋収縮が起こるまでの機構について説明しなさい。（語句：T管、筋小胞体、リアノジン受容体、ATP、トロポニン、カルシウム、アクチン、ミオシン、滑り込み）',
          answerImg: [excitationContractionCoupling, toroponin],
          answer:
            '活動電位はT管（横行小管）の電位依存性Ca²⁺チャネル(DHPチャネル)の構造を変化させ、T管と三つ組をつくる筋小胞体のリアノジン受容体からCa²⁺を細胞質へ放出させる。アクチンとミオシンの結合を阻害するトロポミオシン末端のトロポニンにCa²⁺が結合すると、トロポニン-トロポミオシンの抑制作用が取り除かれ、アクチンとミオシンの相互作用が始まる。ミオシンはATPと結合するとアクチンから離れ、ATPの加水分解で得たエネルギーでアクチンのプラス側に滑り込むことにより、筋節を短縮させる。',
          commentary:
            'アクチン-ミオシンの筋収縮メカニズムは滑り説とよばれ、1秒間に5回程度のペースで繰り返される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '伸張反射について説明しなさい。また、自原性反射、単シナプス性反射である理由を説明しなさい。',
          answerImg: [stretchReflex],
          answer:
            '伸張反射は筋紡錘の伸展刺激を脊髄前角のα運動ニューロンへ単シナプスで伝達することで、引き伸ばされた筋を素早く収縮させる反射。引き伸ばされた筋（同名筋）を収縮させるので自原性反射であり、ただ一つのシナプスを介する（介在ニューロンが経路に存在しない）ので単シナプス性反射である。',
          commentary:
            '同時に起こり得る、拮抗筋が弛緩する反射は相反性反射（抑制）であり、複シナプス性反射である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'γ運動ニューロンの役割は何か。',
          answerImg: [motorNeuron],
          answer:
            '錘内筋を収縮させることで、筋紡錘の脱負荷を防ぎ、筋の収縮中などでも求心性活動を保つはたらき。',
          commentary:
            'γ運動ニューロンの活動が無いと、α運動ニューロンに支配される錘外筋が収縮したときに筋紡錘が機能しない。参考：α-γ連関',
        },
        {
          detailInfo: '',
          questionImg: [exam20202],
          questionSentence:
            '誘発筋電図におけるH波、M波の発生機序を答えよ。右図のA,B,CからM波とH波を選べ。また、M波がすぐに生じる理由と刺激を大きくするとH波が消失する理由を説明しなさい。',
          answerImg: [electromyogram],
          answer:
            '【発生機序】H波は図中BでⅠa群線維→α運動ニューロン→筋、M波は図中Aでα運動ニューロン→筋【M波がすぐに生じる理由】M波は経路が短いため【刺激を大きくするとH波が消失する理由】刺激を大きくすると、閾値の高いα運動ニューロンが直接興奮するようになり、この逆行性インパルスがH波と衝突して消失してしまうから',
          commentary:
            'ia線維もα線維も太く有髄のAα線維に分類され、伝導がはやい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '腱反射について説明しなさい。また、自原抑制・多シナプス性反射である理由を説明しなさい。',
          answerImg: [tendonReflex],
          answer:
            '腱反射とは、ゴルジ腱器官の伸展刺激に対して、同名筋の収縮を抑制し、拮抗筋の収縮を促進する反射。筋の聴力を一定に維持する作用を持ち、同名筋（や協同筋）の収縮を抑制する（→自原抑制）。伸展刺激にしたがってα運動ニューロンを抑制するため、介在ニューロンが必要（→多シナプス性反射）。',
          commentary:
            'これらの特徴から、伸張反射に対して逆伸張反射とよばれることもある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '眼球運動には( 1 )を目的として行う前庭動眼反射、視運動性反応と( 2 )を目的として行う衝動性眼球運動、追跡眼球運動、輻輳・開散運動がある。輻輳・開散運動は( 3 )眼球運動である。',
          answerImg: [eyeMovement],
          answer: '(1)視線保持　(2)中心窩視　(3)非共役性　',
          commentary: '衝動性眼球運動はサッケードともよばれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '瞳孔対光反射について。明るいとき、瞳孔は( 1 )、瞳孔括約筋は( 2 )し、瞳孔散大筋は( 3 )する。',
          answerImg: [pupillaryLightReflex, lightReflex],
          answer: '(1)小さく　(2)収縮　(3)弛緩',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ガラス電極を挿入して逆行性軸索輸送の速度を計測したところ、伝達物質が大脳皮質に到達するまでに延髄錐体で1.2ミリ秒、大脳脚で2.2ミリ秒かかった。延髄錐体と大脳脚の距離が12mmであるとき、この間のニューロンの伝達速度を求めよ。また、これはfastPTN / slowPTNのどちらか、根拠とともに答えよ。',
          answerImg: [PTN],
          answer: '伝達速度は12m/s　→20m/s未満だからslow PTN',
          commentary:
            'PTN:pyramidal tract neuron（錐体路細胞＝皮質脊髄路細胞）錐体路細胞は軸索の興奮伝達速度の違いによる区分がなされ、早い錐体路細胞fastPTNでは20m/sec以上、遅い錐体路細胞slowPTNでは20m/sec未満の伝達速度。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '小脳への入力線維には、顆粒細胞とゴルジ細胞に終止する( 1 )や、全ての抑制性細胞に終止する( 2 )がある。小脳皮質唯一の出力細胞は( 3 )であり、これは( 4 )作動性細胞である。また、顆粒細胞は( 5 )作動性である。',
          answerImg: [cerebellum],
          answer:
            '(1)苔状線維　(2)登上線維　(3)プルキンエ細胞　(4)GABA　(5)グルタミン酸　',
          commentary:
            '小脳への入力線維は苔状線維と登上線維に区分される。GABAは抑制性シグナル伝達、グルタミン酸は興奮性シグナル伝達を担う。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '小脳の機能単位は何か。',
          answerImg: [microZone],
          answer: 'ゾーン（帯域）',
          commentary:
            '小脳は前後方向にモジュール構造：ゾーン（帯域）を構成しており、zoneはさらに微小領域マイクロゾーンにわけられる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '大脳基底核の直接路は運動を( 1 )し、間接路は( 2 )する。間接路が働くと、( 3 )の細胞活動が上昇し、視床の動きは( 4 )される。大脳基底核疾患のうち、黒質緻密部の( 5 )作動性ニューロンの欠落により運動が減少する疾患を( 6 )という。',
          answerImg: [basalGanglia],
          answer:
            '(1)促進　(2)抑制　(3)視床下核　(4)抑制　(5)ドーパミン　(6)パーキンソン病　',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '運動学習における小脳と大脳基底核の役割を、違いを示して説明しなさい。',
          answerImg: [cerebellumLearning, reinforcementLearning],
          answer:
            '小脳では、運動を繰り返す間に感覚情報におけるオンライン誤差を検出して、長期抑圧LTDに基づいてその誤差を予測的に減少させる「誤差学習/error learning」に関与している。大脳基底核では、外界の手がかりに応じた適切な行動を、報酬・懲罰経験を通じて選択していく「強化学習/reward based reinforcement learning」に関与している。',
          commentary:
            '小脳での運動学習の典型例として、プリズム適応が挙げられる。小脳では平行線維と登上線維（教師信号）を同時に活性化すると平行線維のシナプス伝達効率が低下する長期抑圧LTDによって、運動指令が書き換えられていく。大脳基底核では予想に反して報酬が得られた/得られなかった場合にドーパミンニューロンが活動し、報酬予測誤差を最小化するように予測を更新していくことで、最大報酬を得る行動を最適化する。小脳ではフィードフォワード制御によって、大脳基底核ではドーパミンによるアクセル-ブレーキ制御によって運動制御を行っている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】小脳における長期抑圧について、( 1 )と( 2 )がほぼ同時に活性化されることで( 3 )と( 4 )のシナプス伝達効率が一定期間低下する。',
          answerImg: [cerebellumLearning],
          answer: '(1)(2)平行線維・登上線維　(3)平行線維　(4)プルキンエ細胞　',
          commentary: 'このときの登上線維からの入力信号を教師信号という',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ブロードマン地図について説明しなさい',
          answerImg: [BrodmannArea],
          answer: '大脳皮質を、6層の層構造によって区分けしたもの。',
          commentary:
            'この地図は各層の厚さ・神経細胞の密度などを基にした視覚的な分類だが、一次視覚野は17野、一次運動野は4野など、大脳皮質の機能局在とかなり一致している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】脳には3つの連合野がある。( 1 )では空間認知など、( 2 )では物体認知や相貌認知など、( 3 )では行動の制御と計画などを行っている。失語症のうち、左前頭葉の損傷で生じ、話し言葉は理解できるが意味の通った言語を発することができなくなるものを( 4 )、左側頭葉の損傷で生じ、聞いた言葉の理解ができなくなるものを( 5 )という。',
          answerImg: [associationArea],
          answer:
            '(1)頭頂連合野　(2)側頭連合野　(3)前頭連合野　(4)ブローカー失語症　(5)ウェルニッケ失語症　',
          commentary:
            'ブローカー失語症は運動性失語、ウェルニッケ失語症は感覚性失語症ともよばれる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '情動の3つの過程は、( 1 )、( 2 )、( 3 )である。',
          answerImg: [emotion],
          answer:
            '1.感覚刺激の価値評価　2.情動表出　3.情動の主観的体験(feeling)',
          commentary:
            '情動とは、愛情・憎悪・嫌悪・喜悦・羞恥心・羨望・罪悪感・恐怖・不安などを指す。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '薬物使用は嗜癖に進行する可能性がある。依存性薬物は( 1 )で細胞外( 2 )濃度を上昇させることが示されている。',
          answerImg: [drugDependence],
          answer: '(1)側坐核　(2)ドーパミン',
          commentary:
            '側坐核はラットの報酬回路の一部で、ドーパミンニューロンから刺激を受けて腹側淡蒼球などへシグナルを送る。コカイン・ヘロイン・ニコチンなどは報酬回路に作用する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '飲水行動に関して、第三脳室腹側部(AV3V)を構成する3つのものを答えよ。',
          answerImg: [],
          answer: '終板脈管器官OVLT・脳弓下器官SFO・中心視索前核MnPO',
          commentary: 'AV3Vの浸透圧受容ニューロンが渇き感発生に重要',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '飲水行動の発現について、以下の2つの場合について説明せよ。1.細胞内液量の減少による渇き感の発生　2.細胞外液量の減少による渇き感の発生',
          answerImg: [drinkingBehaviorICF, drinkingBehaviorECF],
          answer:
            '1.細胞内液量の減少は、直接または迷走神経を介して第三脳室腹側部(AV3V)の浸透圧受容ニューロンに伝えられ、中心視索前核で浸透圧情報が統合される。渇き感は大脳皮質・大脳辺縁系・他の視床下部領域に伝えられ、飲水行動が発現する。　2.細胞外液量の減少は、腎臓の腎動脈圧センサーや、頚動脈と心肺部の圧受容器で感知され、レニン・アンジオテンシン系や自律神経系経由でAV3Vに伝えられ、次に大脳皮質・大脳辺縁系・他の視床下部領域に伝えられ、飲水行動が発現する。',
          commentary:
            'いずれの場合も第三脳室腹側部AV3Vが浸透圧情報の入出力の統合を行い、大脳皮質・大脳辺縁系・視床下部領域などが飲水行動を誘導する。',
        },
        {
          detailInfo: '',
          questionImg: [exam20212],
          questionSentence:
            '摂食中枢と満腹中枢について、下の表の空欄を埋めなさい。①と②には解剖学的な名称を、③~⑧には促進または抑制と記入すること。',
          answerImg: [feedingCenter],
          answer:
            '1.視床下部外側野(LH)　2.視床下部腹内側核(VMH)　3.抑制　4.促進　5.抑制　6.促進　7.促進　8.抑制',
          commentary:
            '視床下部外側野は摂食中枢、視床下部腹内側核は満腹中枢としてはたらく。食物消化時は体温上昇しやすい',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '満腹中枢と摂食中枢を破壊するとそれぞれどうなるのか説明せよ。',
          answerImg: [foodCenter],
          answer:
            '満腹中枢（視床下部外側野）を破壊すると、食事を取らなくなり痩せる。摂食中枢（視床下部腹内側核）を破壊すると、多食傾向となり肥満になる。',
          commentary: '猫での実験',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '雄ラット性行動、雌ラット性行動の発現メカニズムを説明しなさい。',
          answerImg: [maleAction, femaleAction],
          answer:
            '血中アンドロゲンが視索前野の受容体に作用し、マウント行動発現可能な状態にし、雌からのシグナル（発情臭・勧誘行動）が引き金となって雄ラット性行動（マウント行動）を発現する。血中エストロゲンや関連神経が性行動促進系を活性化・抑制系を解除することで、雌ラット性行動（ロードーシス/脊柱前彎反応）を発現する。',
          commentary:
            'ラットの性行動には視床下部の内側視索前野MPOA・視床下部背内側核（♂性行動の遂行）・視床下部腹内側核（♀性行動の遂行）が関与する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '人の生涯における性を6つ答えなさい',
          answerImg: [humanGender],
          answer:
            '遺伝的性・性腺の性・内性器の性・外性器の性・社会的性・性別自認(gender identity)',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'キスペプチンによる生殖機能を説明しなさい',
          answerImg: [kisspeptin],
          answer:
            '視床下部弓状核のキスペプチンニューロンはGnRHパルスジュネレーター本体で、エストロゲンの負のフィードバックを仲介する。前腹側室周囲核のキスペプチンニューロンはGnRHのサージ分泌を促進し、エストロゲンの正のフィードバックを仲介する。',
          commentary:
            'キスペプチンはKiss1遺伝子の産物で、脳下垂体からのGnRHの強力な分泌促進作用をもち、思春期の開始に重要であることがわかってきた。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '脳の性分化の臨界期はいつか。',
          answerImg: [],
          answer: '発生20週以降（アンドロゲンシャワー説）',
          commentary:
            '副腎アンドロゲン分泌過剰により、男女の正常な性分化が阻害される（副腎アンドロゲンは精巣のアンドロゲンの1/5の作用しかないため）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】光は網膜で捉えられる。概日時計への光入力を行うのは( 1 )である。光情報は( 2 )を通って中枢時計である( 3 )に伝えられる。網膜あるいは(2)の障害で概日リズムはフリーランする。視交叉上核の影響を受け、( 4 )が夜間に( 5 )で合成される。(4)が広範囲の標的組織に作用することで生理機能の日周調節が行われる。',
          answerImg: [circadianClockControl],
          answer:
            '(1)メラノプシン発現網膜神経節細胞　(2)網膜視床下部路　(3)視交叉上核　(4)メラトニン　(5)松果体　',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '概日リズムセンターは何か答えよ。また、その証拠を説明しなさい。',
          answerImg: [SCN],
          answer:
            '概日リズムセンターは視交叉上核。視交叉上核を破壊すると概日リズムが消失するが、破壊してリズムが消失した個体に別の個体から組織を移植するとリズムが回復する。また、培養した器官でも概日リズムを発現する。',
          commentary:
            '網膜→（網膜-視床下部路）→視交叉上核→松果体の経路でメラトニンが合成される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の特徴をそれぞれ説明しなさい。',
          answerImg: [sleepingData],
          answer:
            '【レム睡眠】は睡眠時間の後半を中心に、全睡眠時間の25%を占める。低電位で不規則なθ波などがみられ、急速眼球運動が特徴的。首や胴部の筋肉は弛緩しており、ストーリーをもった視覚的な夢を見ている事が多く、この間に目覚めるとすっきり目覚めることができる。【ノンレム睡眠】は睡眠時間の前半を中心に、全睡眠時間の75％を占め、特徴的な高振幅徐波がみられる。筋緊張は減少し、急速眼球運動はみられない。瞬間的な映像・考え・空想が夢として現れる事が多く、この間に目覚めるとすっきりしない。',
          commentary:
            'その他、レム睡眠中は大脳皮質の動きが活発で、記憶が再構成・長期固定化されている（海馬θ波）と言われており、血圧（急激な変動）・呼吸数（増加）・脈拍数（増加）など自律神経が乱れる時間でもある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '誤っているものを1つ選びなさい。',
          choices: [
            'プロスタグランジンD₂は睡眠物質である',
            'メラトニンは睡眠物質である',
            'プロスタグランジンE₂は覚醒物質である',
            'オレキシンは覚醒物質である',
          ],
          answerImg: [PGDPGE2],
          answer: 'メラトニンは睡眠物質である',
          commentary:
            'メラトニンは夜間に分泌促進される、概日リズム因子である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ナルコレプシーについて、(1)4主徴は何か　(2)ナルコレプシーで検出限界値以下となる物質は何か',
          answerImg: [narcolepsy],
          answer:
            'ナルコレプシーは睡眠発作（昼間の耐え難い眠気と居眠り）・情動性脱力発作・睡眠麻痺（金縛り）・入眠時幻覚の4主徴が3ヶ月以上続く疾患で、オレキシン欠乏が原因。',
          commentary:
            'オレキシンニューロンの後天的な破壊（自己免疫疾患などによる）に伴う神経伝達障害による説が有力。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ナルコレプシーとはどのような病態か。睡眠覚醒スイッチング・神経変性という2つの語句を用いて説明しなさい。',
          answerImg: [narcolepsy2, narcolepsy3],
          answer:
            'ナルコレプシーは覚醒性のオレキシン神経変性により、睡眠・覚醒状態のいずれか一方の状態で安定させる睡眠覚醒スイッチングが不安定となることで、覚醒とレム睡眠の中間的な寝ぼけ状態を呈する病態。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ナルコレプシーの患者の睡眠時の脳波・筋肉・呼吸・眼球運動について説明せよ。',
          answerImg: [narcolepsy4],
          answer:
            'ナルコレプシー患者では、眠りに入ってすぐに【脳波】が低電位不規則なθ波やPGO spikesを観測し、首や胴部の【筋肉】は弛緩し、【呼吸】は早くなり、【眼球運動】急速眼球運動が見られる(SOREMP:sleep onset REM period)',
          commentary:
            'ナルコレプシー患者では、眠りに入ってから15分以内にレム睡眠が観察される。その他金縛り、鮮明な悪夢を経験することも多い。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'LTPの3つの特徴は何か',
          answerImg: [LTPfeature],
          answer: '入力特異性・連合性・共同性（協同性）',
          commentary:
            'LTP発現にはNMDA受容体が関与している。ヘブの法則とは、「ニューロンAとニューロンBを発火させると2つのニューロンの結合が強まる」ということ。記憶とは適切なニューロン同士の結合力の変化である',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'LTP発現のメカニズムを説明せよ。また、LTP発現にテタヌス刺激が必要な理由と、電位を-70mVに固定するとLTPが起こらない理由を答えよ。',
          answerImg: [LTP],
          answer:
            'テタヌス刺激によりNMDA受容体が活性化すると、細胞内にCa²⁺が流入し、細胞内シグナル伝達系が活性化（シナプス後部のAMPA受容体のリン酸化や数の増加/シナプス前部への逆行性シグナル伝達による伝達物質放出の増加）される。細胞内Ca²⁺濃度上昇によって特定遺伝子の転写も促進され、シナプスの長期増強維持や、新しいシナプス形成を促進する。このとき、【テタヌス刺激】での大きな脱分極がないと、NMDA受容体のMg²⁺ブロックが外れず、細胞内にCa²⁺が流入しないから。また、【電位を-70mVに固定する】と同じくNMDA受容体でMg²⁺ブロックが外れず、細胞内にCa²⁺が流入しないから。',
          commentary: 'テタヌス刺激：高頻度の電気刺激',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'マウスの海馬の錐体細胞から記録を行っている時、求心性線維にテタヌス刺激を与えたところ、錐体細胞でのシナプス応答が増大し、それが一時間以上も続く現象がみられた。この現象はなにか。また、同じマウスにおいて錐体細胞の膜電位を-70mVに固定した状態で求心性線維にテタヌス刺激を与えてもこの現象は見られなかった。その理由を答えよ。',
          answerImg: [LTP],
          answer:
            '長期増強LTP（早期LTP） / NMDA受容体のMg²⁺ブロックが外れず、細胞内にCa²⁺が流入しないから。',
          commentary:
            '長期増強は、早期LTP（1～3時間持続し、タンパク質合成は必要としない）・後期LTP（24時間以上持続し、タンパク合成を伴う）にわけられる。',
        },
        {
          detailInfo: '',
          questionImg: [exam20213],
          questionSentence:
            '野生型と、ある受容体をノックアウトした変異型のマウスを用いて電気生理学的解析を行った。モリス水迷路で、AとBは試行を重ねた後に足場を取り除いた際の、野生型か変異型かいずれかの軌跡である。変異型はどちらであるかを答え、その根拠をある受容体とはなにかを明らかにして説明しなさい。また、この実験から考えられる海馬の役割について説明しなさい。',
          answerImg: [],
          answer:
            '変異型はBで、NMDA受容体が除かれたことによって長期増強が起こらなくなり、試行を重ねても足場の位置を記憶することができなかったため。この実験から、海馬は空間情報を記憶する役割を担っていると考えられる。',
          commentary:
            'モリス水迷路：水が不透明で、はじめのうちは足場がどこにあるかがわからないが、試行を重ねるとその位置が記録されていく。→空間記憶課題',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '恐怖条件付けができなくなるのは何を破壊したときか。また、恐怖条件付けのメカニズムについて、「学習・長期増強・無条件刺激・条件刺激」という言葉を使って説明しなさい。',
          answerImg: [fearConditioning],
          answer:
            '扁桃体。恐怖条件付けとは、条件刺激（音など）と無条件刺激（電気ショックなど、恐れに繋がる刺激）を同時に繰り返す（条件付け）ことで、長期増強によって恐怖体験を学習し、条件刺激だけで無条件反応をとるようになる現象。',
          commentary:
            '扁桃体は恐怖条件付けの獲得、その後の恐怖記憶の形成、貯蔵、想起に中心的な役割をになう。',
        },
      ],
    },
    {
      groupTag: '2020本試',
      groupContents: [
        {
          detailInfo: '(1)',
          questionImg: [],
          questionSentence:
            '一次運動野において、特に大きなものをベッツ細胞と呼ぶこともある出力細胞の名称を答えよ。',
          choices: [],
          answerImg: [],
          answer: '錐体細胞',
          commentary:
            '一次運動野からの出力細胞は錐体細胞と呼ばれ、出力先によってⅤ層の大型/中型錐体細胞・Ⅲ層の中型/小型錐体細胞・Ⅵ層の錐体細胞に分かれる。特に錐体路へ出力するⅤ層の大型錐体細胞はBetzの巨大錐体細胞とよばれる。',
        },
        {
          detailInfo: '(2)(3)',
          questionImg: [exam20201],
          questionSentence:
            '図で、ガラス電極を挿入して逆行性軸索輸送の速度を計測したところ、伝達物質が大脳皮質に到達するまでに延髄錐体で1.2ミリ秒、大脳脚で2.2ミリ秒かかった。延髄錐体と大脳脚の距離が12mmであるとき、この間のニューロンの伝達速度を求めよ（単答）。また、このニューロンはfast型かslow型か、根拠とともに答えよ（記述）。',
          choices: [],
          answerImg: [PTN],
          answer:
            '伝達速度は12m/sec。　伝達速度が20m/secより遅いため、slow型。',
          commentary:
            '12mmの大脳脚-延髄錐体間を通過するのに1ミリ秒かかったので、伝達速度は12m/sec。軸索の伝達速度が20m/secより早ければ早い錐体路細胞fastPTN,遅ければ遅い錐体路細胞slowPTNとよばれる。',
        },
        {
          detailInfo: '(4)',
          questionImg: [],
          questionSentence:
            '骨格筋（錘外筋）に繋がっている運動神経線維の名称を答えよ。',
          choices: [],
          answerImg: [motorNeuron],
          answer: 'α運動ニューロン',
          commentary: '',
        },
        {
          detailInfo: '(5)',
          questionImg: [exam20201],
          questionSentence: '(a)で用いられる神経伝達物質は何か。',
          choices: [],
          answerImg: [],
          answer: 'グルタミン酸？',
          commentary:
            'グルタミン酸は、中枢神経で興奮性シナプス伝達を起こす代表的な神経伝達物質である。',
        },
        {
          detailInfo: '(6)',
          questionImg: [exam20201],
          questionSentence:
            '図で、筋細胞の膜電位が-70mVのとき、シナプス電流はどちら向きに流れるか、根拠とともに答えよ。（記述）',
          choices: [],
          answerImg: [],
          answer:
            'ニコチン型アセチルコリン受容体は非選択的陽イオンチャネルなので、内向き',
          commentary: '非選択的陽イオンチャネルの平衡電位は0mV',
        },
        {
          detailInfo: '(7)',
          questionImg: [exam20201],
          questionSentence: '(b)で用いられる神経伝達物質は何か。',
          choices: [],
          answerImg: [NMJ],
          answer: 'アセチルコリン',
          commentary:
            '活動電位が運動ニューロン終末まで伝わると、神経終末から神経伝達物質としてアセチルコリンがシナプス間隙に放出される。筋線維のシナプス後膜にはニコチン型アセチルコリン受容体が存在する',
        },
        {
          detailInfo: '(8)',
          questionImg: [],
          questionSentence:
            '骨格筋が脱分極し、再び静止電位に戻るまでの機序を答えよ。（記述）',
          choices: [],
          answerImg: [NMJ],
          answer:
            '受容体が神経伝達物質を受けると、非選択的陽イオンチャネルが活性化し脱分極を起こし、これが細胞膜と連続しているT細管によって骨格筋の隅々まで信号が伝わる。約5ミリ秒後には受容体に結合したアセチルコリンが分解され、チャネルが閉じ、膜電位は静止膜電位に戻る。',
          commentary: '',
        },
        {
          detailInfo: '(9)',
          questionImg: [exam20201],
          questionSentence:
            '(a)と(b)の神経伝達物質は異なる方法でシナプス間隙から除去される。その方法をそれぞれ文章で説明せよ。',
          choices: [],
          answerImg: [recycleNeurotransmitter],
          answer:
            '(a)グルタミン酸はシナプス前部や周囲グリア細胞へ回収される。(b)アセチルコリンはアセチルコリンエステラーゼAChEによって分解され、コリンとして再利用される。',
          commentary:
            'グルタミン酸の膜輸送体：グルタミン酸トランスポーターEAAT。シナプス前部へ回収された神経伝達物質は、小胞膜輸送体によって再度シナプス小胞へ充填される。',
        },
        {
          detailInfo: '(10)',
          questionImg: [exam20201],
          questionSentence:
            '(c)の器官の名称および役割について、文章で説明せよ。',
          choices: [],
          answerImg: [motorNeuron],
          answer:
            '(c)は多分筋紡錘で、伸展受容器として筋が引き伸ばされている度合いを中枢へ伝える。',
          commentary: '',
        },
        {
          detailInfo: '(11)',
          questionImg: [],
          questionSentence:
            '筋紡錘でみられる伸張反射について、文章で説明せよ。',
          choices: [],
          answerImg: [stretchReflex],
          answer:
            '伸張反射は筋紡錘→Ⅰa線維→α運動ニューロン→引き伸ばされた筋肉が収縮する経路（自原性興奮）でおこる単シナプス性反射である。',
          commentary: '',
        },
        {
          detailInfo: '(12)',
          questionImg: [],
          questionSentence:
            '伸張反射は単シナプス性反射である。その理由を答えよ。',
          choices: [],
          answerImg: [stretchReflex],
          answer:
            '筋紡錘からの求心性線維（Ⅰa線維）が脊髄で直接同名筋のα運動ニューロンとシナプスを形成しているため。',
          commentary:
            '同時に拮抗筋を弛緩させる相反性抑制も発生するが、こちらは筋紡錘伸張による興奮信号を抑制信号へ変える必要があるため、必ず介在ニューロンが存在する。',
        },
        {
          detailInfo: '(13)',
          questionImg: [],
          questionSentence: 'T管（横行小管）の役割について、20-24字で説明せよ',
          choices: [],
          answerImg: [skeletalMuscle],
          answer: '膜の脱分極を骨格筋の深部まで速やかに伝達する。',
          commentary:
            'T細管は細胞膜とひとつづきの構造である。神経筋接合部からの脱分極を速やかに深部の筋小胞体などに伝える。',
        },
        {
          detailInfo: '(14)',
          questionImg: [],
          questionSentence: '筋小胞体の役割について、20-24字で説明せよ',
          choices: [],
          answerImg: [skeletalMuscle],
          answer: '脱分極に合わせて貯蔵Ca²⁺を細胞質に放出する。',
          commentary:
            '普段はATPaseによりCa²⁺を筋小胞体内に能動輸送する。骨格筋ではT細管DHP受容体の構造変化→筋小胞体リアノジン受容体からのCa²⁺放出、心筋ではT細管DHP受容体からのCa²⁺放出→筋小胞体リアノジン受容体からのCa²⁺放出(Ca²⁺-induced Ca²⁺ release)により収縮が開始する。',
        },
        {
          detailInfo: '(15)',
          questionImg: [],
          questionSentence: '興奮収縮連関について、文章で説明せよ',
          choices: [],
          answerImg: [excitationContractionCoupling],
          answer:
            '骨格筋の収縮は、筋細胞質の活動電位により引き起こされる。T細管を通じて活動電位が細胞内へ伝導され、triadで隣接する筋小胞体のCa²⁺放出チャネル（リアノジン受容体）を開き、筋小胞体から筋形質にCa²⁺が放出されることで、Ca²⁺がトロポニンに結合し収縮反応が引き起こされる。',
          commentary:
            'T細管、筋小胞体、トロポニンにCa²⁺が結合することによる収縮',
        },
        {
          detailInfo: '(12)(13)',
          questionImg: [exam20201],
          questionSentence:
            '(c)に入力する運動神経線維の名称を答えよ。また、この神経線維の役割を文章で説明せよ。',
          choices: [],
          answerImg: [motorNeuron],
          answer:
            'γ運動ニューロン...筋紡錘の両端の錘内筋線維を支配し、感度を調節している。',
          commentary: '',
        },
        {
          detailInfo: '(14)',
          questionImg: [],
          questionSentence:
            '筋紡錘に入力するγ運動ニューロンと、骨格筋を支配するα運動ニューロンとの、出力の関係をなんというか？',
          choices: [],
          answerImg: [alphaGammaLinkage],
          answer: 'α-γ連関',
          commentary:
            '骨格筋に合わせて筋紡錘の長さを変えることで、感度を一定範囲に保つ。',
        },

        {
          detailInfo: '(15)',
          questionImg: [exam20202],
          questionSentence:
            '図は誘発筋電図で、横軸は時間、縦軸は筋電位である。aの波をなんというか？',
          choices: [],
          answerImg: [electromyogram],
          answer: 'M波',
          commentary:
            '骨格筋を支配する神経を電気刺激すると、複合的な活動電位が誘発される（→誘発筋電図）。M波はα運動神経線維が刺激されたときにみられる早い波で、主に強い刺激を加えたときにみられる。',
        },
        {
          detailInfo: '(16)',
          questionImg: [exam20202],
          questionSentence: 'bの波をなんというか？',
          choices: [],
          answerImg: [electromyogram],
          answer: 'H波',
          commentary:
            '骨格筋を支配する神経を電気刺激すると、複合的な活動電位が誘発される（→誘発筋電図）。H波はⅠa群線維（筋紡錘→中枢）が刺激されたときにみられる遅い波で、主に弱い刺激を加えたときにみられる。',
        },
        {
          detailInfo: '(17)',
          questionImg: [exam20202],
          questionSentence: 'bの波が遅れて発生する理由を文章で説明せよ',
          choices: [],
          answerImg: [electromyogram],
          answer:
            'bの波(H波)はⅠa群線維→（脊髄前角）→α運動神経線維→筋肉の経路で伝わる活動電位で、aの波のα運動神経線維→筋肉の経路で伝わる波に比べて伝わる距離が長く、活動電位が遅れて伝わる。',
          commentary: '図は誘発筋電図。',
        },
        {
          detailInfo: '(18)',
          questionImg: [exam20202],
          questionSentence:
            '刺激強度を上げるとbの波が消失する理由について、以下の語句を用いて文章で説明せよ。　（語句）Ⅰa群線維・活動電位・運動線維・不応期',
          choices: [],
          answerImg: [electromyogram],
          answer:
            'bの波はⅠa群線維から運動線維を通り活動電位を伝える経路だが、刺激強度を挙げると運動線維自体が刺激されるようになり、その不応期にⅠa群線維からのbの波(H波)が到達すると消失してしまう。',
          commentary: '図は誘発筋電図。',
        },
        {
          detailInfo: '問題2(1)',
          questionImg: [exam20203],
          questionSentence:
            'マイスネル小体、ルフィニ終末、パチニ小体、メルケル細胞の受容野の広さ（広い or 狭い）、順応の早さ（早い or 遅い）、役割について、表の空欄を埋めよ。',
          choices: [],
          answerImg: [sensoryReceptors],
          answer:
            '（マイスネル小体）受容野狭い、順応早い、圧や低周波振動を感知する。（ルフィニ終末）受容野広い、順応遅い、皮膚の伸展変形を感知する。（パチニ小体）受容野広い、順応早い、深部圧・高周波振動を感知する。（メルケル細胞）受容野狭い、順応遅い、軽い接触を感知する。',
          commentary:
            '浅部にあるマイスネル小体RA1・メルケル細胞SA1は受容野が狭い1型、深部にあるパチニ小体RA2・ルフィニ小体SA2が受容野の広い2型。被膜で覆われたマイスネル小体とパチニ小体は圧・周波感知に優れ順応が早い。',
        },
        {
          detailInfo: '問題2(2)',
          questionImg: [],
          questionSentence: '皮膚分節（デルマトーム）とは何か、文章で説明せよ',
          choices: [],
          answerImg: [dermatome],
          answer: '一つの脊髄分節が感覚を伝える皮膚の領域のこと。',
          commentary: '',
        },
        {
          detailInfo: '問題2(3)',
          questionImg: [],
          questionSentence: '関連痛が生じる理由について、文章で説明せよ',
          choices: [],
          answerImg: [dermatome],
          answer:
            '皮膚デルマトームの領域由来の上方と内臓由来の情報が、同じニューロンに収束しており、脳に伝達される際に内臓ではなく皮膚からのものであると脳が誤認識してしまうことが原因。',
          commentary: '参考：関連痛',
        },
        {
          detailInfo: '問題2(4)',
          questionImg: [],
          questionSentence: '温度覚および痛覚の伝導路をなんというか？',
          choices: [],
          answerImg: [],
          answer: '外側脊髄視床路',
          commentary: '',
        },
        {
          detailInfo: '問題2(5)',
          questionImg: [],
          questionSentence:
            '二次痛の原因となる受容器の名称およびそこから出力される求心性線維の名称を答えよ',
          choices: [],
          answerImg: [nociception],
          answer: '受容器：ポリモーダル受容器、求心性線維：C線維（無髄）',
          commentary:
            '同じ侵害性刺激に対して別の侵害受容器が信号を伝達するのだが、有髄Aδ線維（→一次痛）と無髄C線維（→二次痛）で伝達速度が異なることが原因で痛みを複数感じることになる。',
        },
        {
          detailInfo: '問題2(6)',
          questionImg: [],
          questionSentence:
            '蝸牛の有毛細胞において、動毛が適方向に屈曲してから神経伝達物質が放出するまでの機序について、以下の書き出しに続く形で、文章で説明せよ。（解答）動毛が適方向に屈曲すると～、',
          choices: [],
          answerImg: [hairCell],
          answer:
            '動毛が適方向に屈曲すると機械受容器チャネルが開き、K⁺が細胞外の内リンパ液から細胞内へ流入し、脱分極が生じて、電位依存性Ca²⁺チャネルが開き、シナプス小胞から神経伝達物質が放出される。',
          commentary:
            '機械受容器はMETチャネル複合体とよばれる。内リンパ液はK⁺濃度が高い。',
        },
        {
          detailInfo: '問題2(7)',
          questionImg: [],
          questionSentence:
            '視細胞が暗所で脱分極する機序について、以下の語句を用いて文章で説明せよ。（語句）cGMP依存性チャネル、cGMP、グアニル酸シクラーゼ',
          choices: [],
          answerImg: [photoreception],
          answer:
            '光がない暗所では視物質ロドプシンが活性化されず、ホスホジエステラーゼが活性化されないので、グアニル酸シクラーゼによって合成されたcGMPが分解されず、cGMP依存性チャネルが開口しNa⁺やCa²⁺が流入し脱分極する。',
          commentary:
            'cGMP依存性チャネルは細胞内cGMP濃度の上昇によって開く、視細胞膜にあるイオンチャネルで、主にNa⁺とCa²⁺を通す。',
        },
        {
          detailInfo: '問題2(8)',
          questionImg: [],
          questionSentence:
            'ロドプシンが光刺激を受け取ってから視細胞が過分極応答するまでの機序について文章で説明せよ',
          choices: [],
          answerImg: [photoreception],
          answer:
            '光によりロドプシンがメタロドプシンⅡへと活性化され、メタロドプシンⅡがトランスデューシンのGDPをGTPに変えて活性化し、ホスホジエステラーゼが活性化されることで、cGMPが加水分解されるようになり、細胞内cGMP濃度が下がることでcGMP依存性チャネルが閉じ、Na⁺やCa²⁺が細胞内へ流入しなくなり、視細胞は過分極応答を示す。',
          commentary: '光が当たると過分極、当たらないと脱分極。',
        },
        {
          detailInfo: '問題2(9)',
          questionImg: [],
          questionSentence:
            'オン型双極細胞がグルタミン酸を受け取ってから過分極を生じるまでの機序について、文章で説明せよ',
          choices: [],
          answerImg: [mGluR6],
          answer:
            '視細胞からグルタミン酸放出が増加すると、mGluR6が活性化され、それによりG₀が活性化され、G₀がTRPM1チャネルを閉じる事で双極細胞は過分極する。',
          commentary:
            'オン型双極細胞は、光がオンの時に脱分極。視細胞は暗い場所で脱分極しグルタミン酸を放出する。mGluR6は代謝型グルタミン酸受容体。TRPチャネルは非選択的陽イオンチャネル。',
        },
        {
          detailInfo: '問題3(a)~(b)',
          questionImg: [],
          questionSentence:
            '記憶のうち、短期記憶は( a )とも呼ばれる。一方、長期記憶のうち陳述的記憶の中には、知識や意味といった事実に関する記憶である意味記憶や、場所や時間などの属性が付加した出来事に関する記憶である( b )記憶が存在する。空欄(a)(b)に入る適切な語句をかけ',
          choices: [],
          answerImg: [longMemory],
          answer: '(a)作業記憶/ワーキングメモリ　(b)エピソード記憶',
          commentary: '',
        },
        {
          detailInfo: '問題3(c)~(g)',
          questionImg: [],
          questionSentence:
            '非陳述的記憶の中には、条件刺激と無条件刺激を一定の時間間隔で対提示することにより成立する( c )や、動物の自発的反応により成立する( d )がある。また、非陳述的記憶にはこの他にも、同じ刺激の反復によって反応が減弱する( e )や、逆に増強する( f )が存在する。アメフラシのえら引っ込め反射を司る促通性介在ニューロンの神経伝達物質は( g )である。空欄(c)~(g)に入る適切な語句をかけ',
          choices: [],
          answerImg: [sensitization],
          answer:
            '(c)古典的条件づけ　(d)オペラント条件付け　(e)慣れ　(f)感作　(g)セロトニン',
          commentary: '',
        },
        {
          detailInfo: '問題3(h)~(p)',
          questionImg: [],
          questionSentence:
            'シナプス伝達の増強・減弱が長時間続く現象をそれぞれ、( h )・( i )という。これはシナプスの( j )と関わりが深い。(h)は、テタヌス刺激を加えることで( k )型受容体の( l )によるブロックが外れて( m )が細胞内に流入することで生じる。一方、小脳における(i)では、( n )と( o )をほぼ同時に活性化すると、(n)と( p )との間のシナプス伝達効率が一定期間低下する。空欄(h)~(p)に入る適切な語句をかけ',
          choices: [],
          answerImg: [LTP, LTD],
          answer:
            '(h)長期増強LTP　(i)長期抑圧LTD　(j)可塑性　(k)NMDA型受容体　(l)Mg²⁺　(m)Ca²⁺　(n)平行繊維　(o)登上線維　(p)プルキンエ細胞',
          commentary: '長期増強<->長期抑圧、シナプスの可塑性<->弾性',
        },
        {
          detailInfo: '問題4(1)',
          questionImg: [],
          questionSentence:
            '大脳基底核の直接系が働くと、ニューロン活動はどう変化するか',
          choices: [],
          answerImg: [basalGanglia],
          answer:
            '直接系（直接路）は視床の活動を抑制する基底核出力部を抑制する（二重抑制）ため、基底核出力部の活動は抑制され、視床や大脳皮質の活動は亢進する。',
          commentary: '大脳基底核は視床下核以外基本的に出力が抑制性。',
        },
        {
          detailInfo: '問題4(2)',
          questionImg: [],
          questionSentence:
            '大脳基底核の直接系が働くと、筋活動はどう変化するか',
          choices: [],
          answerImg: [basalGanglia],
          answer: '筋緊張低下、運動亢進、不随意運動（舞踏運動）など',
          commentary: '→ハンチントン病',
        },
        {
          detailInfo: '問題4(3)(4)',
          questionImg: [],
          questionSentence:
            '黒質緻密部における神経伝達物質を答えよ。また、この物質が不足することで起こる疾患を答えよ。',
          choices: [],
          answerImg: [basalGanglia],
          answer: 'ドーパミン、パーキンソン病',
          commentary: '治療時にはL-DOPAを使用',
        },

        {
          detailInfo: '問題4(5)',
          questionImg: [],
          questionSentence:
            '運動過多症のなかで、筋緊張の低下を伴う疾患は何か。',
          choices: [],
          answerImg: [basalGanglia],
          answer: 'ハンチントン病',
          commentary:
            '常染色体優性遺伝で、舞踏運動（顔面や四肢などに起こる速やかで不随意な異常運動）や痴呆などの精神症状を伴う。筋緊張が過度に低下している。線条体の異常により間接路（間接系）が機能しないのが原因。',
        },
        {
          detailInfo: '問題5(1)',
          questionImg: [exam20204],
          questionSentence:
            '図の横軸は試行回数、縦軸は誤差である。プリズム眼鏡を装着すると誤差が生じるが、試行回数を増やすと誤差が減少する。この現象をなんというか。',
          choices: [],
          answerImg: [prismAdaptation],
          answer: 'プリズム適応',
          commentary:
            '小脳の主要な機能のひとつ。運動を繰り返す間に、長期抑圧LTDに基づいて運動の向きや大きさなどを調整していく→誤差学習。大脳基底核で報酬・懲罰経験を通じて行動を最適化していく学習は強化学習と呼ばれる。',
        },
        {
          detailInfo: '問題5(2)',
          questionImg: [exam20204],
          questionSentence:
            'プリズム適応は、運動系の変化によって起こる。その根拠を文章で説明せよ',
          choices: [],
          answerImg: [motorLearning],
          answer:
            '右手はプリズム眼鏡装着後にプリズム適応の反動？で逆方向に誤差が生じているが、プリズム適応のなかった左手ではプリズム眼鏡装着後でも誤差が生じなかったから。',
          commentary:
            '運動の結果をフィードバックとして次の運動の制御に利用している（運動学習）',
        },
        {
          detailInfo: '問題5(3)',
          questionImg: [exam20204],
          questionSentence:
            'もし、プリズム適応が感覚系の変化によるものであるとすれば、結果はどうなると考えられるか。（図を用いても良いが、文章での説明は必須）',
          choices: [],
          answerImg: [],
          answer:
            'もし視覚情報を補正して適応しているのであれば、右手試行時のプリズム適応が左手で試行する場合にも補正されるため、プリズム適応装着後の左手での試行が右手と同じように逆方向に誤差が生じるようになる。',
          commentary: '',
        },
        {
          detailInfo: '問題6',
          questionImg: [],
          questionSentence:
            '(1)両側の扁桃体を破壊した時に生じる症状を5つ挙げ、(2)これらの症状をまとめた疾患名を答え、(3)症状から考えられる扁桃体の機能、および(4)その根拠となる扁桃体の機能の実証例について、それぞれ記述せよ。',
          choices: [],
          answerImg: [],
          answer:
            '(1)口唇傾向（手に取ったものを全て口に持って行ってしまう）・視覚失認症・性欲亢進・短期記憶障害・尿便失禁・食欲亢進・情動の欠如（温和化）・精神盲（視覚性失認）の中から5つ　(2)クリーヴァー・ビューシー症候群　(3)感覚刺激の価値評価（報酬性か嫌悪性）に関与している？　(4)猫に対して25秒間の扁桃体の電気刺激を行うと、唸り声を発し頭部を下げ、耳伏せ、瞳孔拡大、立毛が見られるようになり、35秒間の電気刺激後では情動性のより高い反応であるヒッシングを発する。',
          commentary: '',
        },
        {
          detailInfo: '問題7(a)~(g)',
          questionImg: [],
          questionSentence:
            '頭頂連合野は、空間情報「( a )」や、「( b )」を扱い、( c )に関与する。この領域の損傷により、( d )、( e )、( f )が生じる。特に、右側の頭頂連合野損傷により、空間左半分の( g )が起こる。空欄(a)~(g)に入る適切な語句をかけ',
          choices: [],
          answerImg: [associationArea],
          answer:
            '(a)どこに　(b)どこへ　(c)外界へのアクション　(d)視覚性運動失調　(e)失読や失書　(f)構成失行　(g)半側空間無視',
          commentary:
            '視覚性運動失調：視覚入力と運動出力を調和させることが困難（暗闇で自分の膝に触れるなど、視覚に依存しない課題は遂行できる）。構成失行：ものの各部分の空間内での位置関係を知覚できない（ものを認識することはできるが、上手く絵に描けない）。半側空間無視：損傷の対側の空間における事象に全く注意を払わない。その他、頭頂連合野には書字中枢（頭頂葉角回）があり、ここやその周辺皮質を損傷すると、失書（自発的に文字を書くことも書き取りもできない失書）・左右失認・手指失認・失算を伴うゲルストマン症候群を発症する。',
        },
        {
          detailInfo: '問題7(h)~(o)',
          questionImg: [],
          questionSentence:
            '側頭連合野は、上部で( h )覚認知を、下部で( i )覚認知、特に( j )「( k )」を扱う。病巣により感覚性( l )、( m )障害、(i)覚失認、( n )健忘、言語障害が生じる。言語野の一つである( o )野が存在する。空欄(h)~(o)に入る適切な語句をかけ',
          choices: [],
          answerImg: [associationArea],
          answer:
            '(h)聴覚　(i)視覚　(j)形態視覚　(k)なにが　(l)失音楽　(m)(環境音の)認知障害？　(n)前向性健忘　(o)ウェルニッケ',
          commentary:
            '側頭連合野は一次聴覚野を除いた側頭葉の領域である。海馬などにも近い。視覚物体失認の患者は、絵を模写できるが、それが何であるかをいえない。日本人では左側頭葉下部の破壊で漢字の失読失書を起こす。',
        },
        {
          detailInfo: '問題7(p)~(w)',
          questionImg: [],
          questionSentence:
            '前頭連合野は( p )計画の組み立て、その( q )の判断、視覚的目標への( r )運動の制御、( s )形成、( t )記憶に関与する。言語野の一つである( u )野がある。病巣に伴い(s)の変化、(p)のプログラミングの障害、( v )注意障害、運動性( w )、(t)記憶障害が起こる。空欄(p)~(w)に入る適切な語句をかけ',
          choices: [],
          answerImg: [associationArea],
          answer:
            '(p)行動　(q)実行　(r)眼球運動　(s)性格　(t)作業　(u)ブローカー　(v)視覚的注意　(w)失語',
          commentary:
            '前頭連合野は前頭葉で運動皮質よりも前の部分である。視覚的注意の障害：絵を見せてその中に描かれている内容を求めると、その一部が気になり、絵を分析的・系統的に見ることができない。ブローカー野は左半球の第三前頭回後方に位置し、運動性言語野とよばれる。→フィニアスゲージの症例',
        },
        {
          detailInfo: '問題8(1)(2)',
          questionImg: [],
          questionSentence:
            '哺乳類の概日時計システムに関して、内因性リズムの位相を環境に同調させる3要素と、それぞれについてそれを担う器官を答えよ。',
          choices: [],
          answerImg: [circadianClockControl],
          answer:
            '網膜の光受容器（入力系）、視交叉上核の時計発振系、松果体のリズム発現系（出力系/例えばメラトニン分泌）',
          commentary:
            'これら三要素が内因性リズムの位相を環境の明暗周期に同調させる。網膜では第三の光受容細胞であるメラノプシン発現網膜神経節細胞が輝度を感知し、視交叉上核では網膜からの光シグナルで中枢時計の光リセットが行われ、松果体では中枢時計の影響を受け夜間にメラトニンの合成・分泌が行われる。',
        },
        {
          detailInfo: '問題8(3)',
          questionImg: [],
          questionSentence:
            '哺乳類の概日時計システムに関して、内因性リズムの位相を環境に同調させる3要素の、各要素間の連絡について簡潔に説明せよ。',
          choices: [],
          answerImg: [circadianClockControl],
          answer:
            '網膜→視交叉上核はグルタミン酸などの興奮性アミノ酸（神経伝達物質）、視交叉上核→松果体は交感神経系ノルアドレナリン放出によって連絡が行われる。',
          commentary:
            '網膜-視床下部路と上顎神経節がそれぞれ連絡経路として活躍する。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(1)脳波の観点から述べよ。',
          choices: [],
          answerImg: [EEG],
          answer:
            'レム睡眠では低電位で不規則なθ波やPGO spikesが見られるが、ノンレム睡眠（徐波睡眠）では眠りに特徴的な紡錘突発波と徐波が見られる',
          commentary:
            'ノンレム睡眠では低周波大振幅の脳波、レム睡眠は高周波不規則の脳波。θ波（高周波不規則）は浅いノンレム睡眠とレム睡眠でみられ、レム睡眠では海馬の記憶再編成の過程で生じるといわれている。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(2)呼吸の観点から述べよ。',
          choices: [],
          answerImg: [sleepingData],
          answer: 'レム睡眠ではノンレム睡眠と比較して、呼吸数が10%~20%増加する',
          commentary:
            'レム睡眠中は首から下の筋肉は弛緩しているが、ストーリー性の夢を見ているため歯ぎしり・寝言・夜尿などを伴い急激な自律神経変化が起こる。呼吸数は増加する。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(3)脈拍の観点から述べよ。',
          choices: [],
          answerImg: [sleepingData],
          answer: 'レム睡眠はノンレム睡眠と比較して、脈拍数が10%程度増加する',
          commentary:
            'レム睡眠中は首から下の筋肉は弛緩しているが、ストーリー性の夢を見ているため歯ぎしり・寝言・夜尿などを伴い急激な自律神経変化が起こる。脈拍数は増加する。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(4)血圧の観点から述べよ。',
          choices: [],
          answerImg: [sleepingData],
          answer:
            'レム睡眠はノンレム睡眠と比較して、血圧が急激に変化するようになる(±10mmHg)',
          commentary:
            'レム睡眠中は首から下の筋肉は弛緩しているが、ストーリー性の夢を見ているため歯ぎしり・寝言・夜尿などを伴い急激な自律神経変化が起こる。血圧は前後のノンレム睡眠と比較して急激に上がるか、急激に下がる。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(5)筋活動の観点から述べよ。',
          choices: [],
          answerImg: [],
          answer:
            'レム睡眠では首や胴部の筋肉の弛緩（筋緊張の消失）・急速眼球運動REMがみられる。ノンレム睡眠では睡眠が深いほど筋緊張の減少がみられるが、急速眼球運動はみられない。',
          commentary: '',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(1)目覚めの観点から述べよ。',
          choices: [],
          answerImg: [EEG],
          answer:
            'レム睡眠中に目覚めると気分が良く、はつらつとしているが、ノンレム睡眠中に目覚めるとぼおっとしていて、記憶喪失のような状態になる。',
          commentary:
            'レム睡眠中は覚醒状態・浅いノンレム睡眠でみられるθ波主体のため、目覚めが良い？',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(7)夢の観点から述べよ。',
          choices: [],
          answerImg: [],
          answer:
            'レム睡眠中はストーリーをもった視覚的な夢中心であるのに対して、ノンレム睡眠中は瞬間的に映像・考え・空想などが現れることが多い。',
          commentary:
            'レム睡眠中は脳が覚醒に近い状態にあり記憶の再構成が行われている。ノンレム睡眠中は大脳皮質神経細胞が一斉に抑制されている（前障が一部を選択的に発火させる）',
        },

        {
          detailInfo: '問題10',
          questionImg: [],
          questionSentence:
            '本能行動に関わるホルモンについて、次のうちから5つ選び、それぞれの産生部位・受容部位および作用機序について文章で説明せよ。[アディポネクチン、アルファフェトタンパク質、エストラジオール、エポキシエイコサトリエン酸、オキシトシン、オレキシン、キスペプチン、グレリン、テストステロン、レプチン]',
          choices: [],
          answerImg: [],
          answer:
            'それぞれボタンを押すと確認できます→アディポネクチン、アルファフェトタンパク質、エストラジオール、エポキシエイコサトリエン酸、オキシトシン、オレキシン、キスペプチン、グレリン、テストステロン、レプチン',
          commentary:
            'オキシトシンはオレキシンと名前が似ているが効果が真逆（オキシトシンは摂食抑制/オレキシンは摂食促進）',
        },
        {
          detailInfo: '問題11',
          questionImg: [],
          questionSentence:
            '嗅覚と味覚の受容メカニズムの違いを文章で説明せよ。',
          choices: [],
          answerImg: [olfactory, taste],
          answer:
            '嗅覚ではにおい分子が結合したGPCR（Gs）によって、細胞内cAMPが増加し、cAMP依存型陽イオンチャネルが開口することで脱分極・細胞内Ca²⁺増加が起こり、Cl⁻チャネルが活性化することで活動電位が発生する。活動電位は篩板を抜け嗅球の糸球体で僧房細胞・房飾細胞などの二次ニューロンへ伝達される。一方味覚のうち旨味・甘味・苦味は味物質がGPCRに受容されるとPLCが活性化され、IP₃が産生され、IP₃が小胞体のIP₃受容体に結合しCa²⁺を放出させ、非選択的陽イオンチャネルが開口し、脱分極が起こる。活動電位によりセロトニンが伝達物質として味蕾のすぐ基底部で二次ニューロンへ伝達される。',
          commentary:
            '塩味・酸味はイオンチャネル型受容体→電位依存型Ca²⁺チャネルによってシナプス小胞内の神経伝達物質が開口分泌される。',
        },
        // {
        //   detailInfo: '問題7',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2017本試(再現)',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】体性感覚には温度や侵害刺激を感知する( a )と、筋長や関節角を感知する( b )がある。温度を感知するチャネルには( c )があり、これは温度だけでなく( d )も感知する。侵害刺激を伝える線維には( e )線維と( f )線維がある。また、内臓の痛みを、同じ脊髄に入力する( g )内の皮膚の痛みとして感じることがある。これを( h )という。',
          choices: [],
          answerImg: [nociception],
          answer:
            'a.表在感覚　b.深部感覚　c.TRP　d.化学物質　e.Aδ　f.C　g.デルマトーム　h.関連痛',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '両側の扁桃体を切除することによって発症する疾患を何というか、答えよ。',
          answerImg: [kluverBucy],
          answer: 'クリューヴァー・ビューシー症候群',
          commentary: 'Kluver-Bucy syndrome。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'クリュ－ヴァー・ビューシー症候群の典型的な症状を4つ答えよ。',
          answerImg: [kluverBucy],
          answer:
            '口唇傾向・過食・恐怖心の欠如・視覚失認・視覚性過敏反応・性行動の異常　のなかから4つ',
          commentary: '扁桃体は情動回路で重要な働きを担っている。',
        },
        {
          detailInfo: '',
          questionImg: [exam20171],
          questionSentence:
            '図は報酬性物体・嫌悪性物体・無意味物体に対するサル扁桃体の意味認知ニューロンと価値評価ニューロンの神経応答を記録したグラフである。AとBはそれぞれ価値評価ニューロン・意味認知ニューロンのどちらであるか、理由をつけて答えよ。',
          answerImg: [typeOfAmygdala],
          answer: 'A.価値評価ニューロン　B.意味認知ニューロン',
          commentary:
            'Aは無意味物体以外の物体に対して応答の強度を変化させることで価値評価を行っており、Bは報酬性物体あるいは嫌悪性物体のうち1つの物体にだけ応答することで物体の認知を行っている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '飲水行動に関わる中枢の器官を3つ挙げよ。',
          answerImg: [drinkingBehaviorICF],
          answer: '終板脈管器官OVLT・脳弓下器官SFO・中心視索前核MnPO',
          commentary: '3つ合わせて第三脳室腹側部AV3Vと呼ぶ。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞外液の減少を感知して飲水行動を誘導する機序を説明せよ。',
          answerImg: [drinkingBehaviorECF],
          answer:
            '細胞外液量の減少は腎臓・心肺の圧受容器で感知され、RAA系や自律神経系経由でAV3Vへと伝えられ、次に大脳皮質・大脳辺縁系・他の視床下部領域へと情報が伝わって飲水行動が引き起こされる。',
          commentary:
            '細胞外液量の減少は血圧の低下として感知される。腎臓には腎動脈圧センサーがあり、頚動脈・心肺部には高圧・低圧受容器がある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞内液量の減少を感知して飲水行動を誘導する機序を説明せよ。',
          answerImg: [drinkingBehaviorICF],
          answer:
            '第三脳室腹側部AV3Vの浸透圧受容ニューロンが血漿浸透圧の上昇を感知し、MnPOで浸透圧情報の入出力の統合が行われた後、大脳皮質・大脳辺縁系・他の視床下部領域へと情報が伝わって飲水行動が引き起こされる。',
          commentary:
            '細胞内液量の減少は血漿浸透圧の上昇として感知される。脳室周囲器官グリア細胞にはNaxチャネルが存在し、体液中のNa⁺濃度が上昇すると活性化したNaxチャネル発現グリア細胞からエポキシエイコサトリエン酸が放出され、TRPV4を発現する神経細胞を活性化させることで水分摂取行動・塩分摂取抑制行動・Na⁺利尿が誘発される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '嗅細胞と味細胞の違いを述べよ。',
          answerImg: [olfactorySynapse, tasteBuds],
          answer:
            '嗅細胞の軸索は篩板を通過し嗅球糸球体のシナプスまで伸ばしている一方で、味細胞の味情報は味蕾内で統合され、味蕾まで樹状突起を伸ばしている味神経へ伝達される。',
          commentary:
            '参考：ラベルドライン理論（特異的な味覚情報を送る）、アクロスファイバー理論（複雑な味覚情報を送る）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いを、脳波・筋電図・夢・目覚め・眠りの深さについてかけ。',
          answerImg: [differencesNonREMtoREM],
          answer:
            'レム睡眠では、脳波は低電位で不規則的なθ波やPGO spikesが特徴的で、首や胴部の筋肉は弛緩しきっている。急速眼球運動にあわせてストーリー性のある視覚的な夢をみていて、眠りは浅く、この間に目覚めると気分が良く、はつらつとしている。ノンレム睡眠では、脳波は特徴的な高振幅徐波を示し、筋緊張は覚醒状態とくらべると少ない。瞬間的に映像・考え・空想などが現れる夢を見ることが多く、この間に目覚めるとぼおっとして記憶喪失のような状態となる。よって、ノンレム睡眠中は眠りが深い。',
          commentary:
            'その他、レム睡眠中はアセチルコリン作動性ニューロンが活発に活動しており、呼吸数や脈拍が（ノンレム睡眠と比べて）高く、血圧が乱高下する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】小脳への入力は、脳幹網様体などに起始核をもつ( a )線維と、( b )に起始核をもち下小脳脚を通過する( c )線維によって行われる。(a)線維は小脳皮質内で顆粒細胞とシナプスを形成し、( d )線維を伝ってプルキンエ細胞に入力する。(c)線維と(d)線維が同時に活性化されると、(d)線維とプルキンエ細胞間のシナプス伝達効率が一定期間低下する。この現象を( e )といい、この時の(c)線維からの入力信号を( f )信号と呼ぶ。',
          answerImg: [cerebellum, cerebellumLearning],
          answer:
            'a.苔状　b.下オリーブ核　c.登上　d.平行　e.長期抑圧LTD　f.教師',
          commentary: '小脳からの出力はプルキンエ細胞が唯一。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '一次視覚野から高次視覚野への2つの投射経路とその役割について述べよ。',
          answerImg: [visualPathway],
          answer:
            '腹側経路は1次視覚野から側頭葉を経由する経路で、物体の色や形を識別する。背側経路は1次視覚野から頭頂葉を経由する経路で、主に物体の動きを感知する。',
          commentary:
            '腹側経路は小細胞経路ともよばれ、網膜神経節細胞のミジェット神経節細胞から1次視覚野へ入力される。背側経路は大細胞経路とも呼ばれ、網膜神経節細胞のパラソル神経節細胞から1次視覚野へ入力される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '軸索での活動電位の伝播について、通常活動電位は減衰せず（不減衰伝導）、細胞体から神経終末へ一方向に伝わっていく（一方向伝導）。この機構について、細胞膜でのイオンチャネルの活動に着目して説明せよ。',
          answerImg: [unidirectionalConduction],
          answer:
            '軸索では、活動電位が伝わると局所的な活動電位が発生し、これが連鎖していくことで活動電位が減衰することなく伝播していく。このとき、活動電位の発生に必須の電位依存性Na⁺チャネルが長い不応期を持つため、通常は活動電位が逆流することなく一方向に伝わっていく。',
          commentary:
            '軸索の活動電位は両方向伝導の性質をもつが、生体では活動電位は樹状突起からのみ入力されるため、軸索を一方向に伝わっていく。',
        },
        {
          detailInfo: '',
          questionImg: [exam20172],
          questionSentence:
            '大脳基底核の直接路と間接路について、それぞれを構成するニューロン活動の増減と経路の機能から、それぞれ何系と呼ばれているか。',
          answerImg: [basalGangliaSystems],
          answer: '直接路：脱抑制系、間接路：抑制強化系',
          commentary:
            '直接路はアクセル（筋活動の抑制を抑制）、間接路はブレーキ（筋活動の抑制を促進）にたとえられる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '骨格筋の興奮収縮連関(E-C coupling)の機構について、次の語句を用いて説明せよ。【語句：T管・筋小胞体・トロポニン】',
          answerImg: [excitationContractionCoupling],
          answer:
            'T管を通じて活動電位が筋細胞内へ伝導され、triadにおいて隣接する筋小胞体のCa²⁺放出チャネルから筋形質中にCa²⁺が放出される。Ca²⁺がトロポニンに結合すると、ミオシンとアクチンによる収縮が始まる。',
          commentary:
            '骨格筋の収縮Contractionと筋細胞膜の活動電位Excitationとの連関',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '暗時に杆体細胞が脱分極している理由を記述せよ。',
          answerImg: [opticReceptor],
          answer:
            '暗時はホスホジエステラーゼPDEが活性化されていないため、cGMPが十分に存在し、cGMP依存性陽イオンチャネルが開口しているので脱分極している。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ON型双極細胞における興奮伝達から活動電位のメカニズムについて、説明せよ。',
          answerImg: [mGluR6],
          answer:
            '視細胞が光を受けて過分極すると、グルタミン酸の放出が減少し、双極細胞のmGluR6受容体の活性が下がり、共役しているGタンパク質(G0)が不活化され、TRPM1チャネルが開くことで脱分極する。',
          commentary:
            '双極細胞は網膜内顆粒層で杆体/錐体細胞からの信号を神経節細胞に繋げる役目をする。ON型双極細胞は光がONの時に脱分極',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ON型網膜神経節細胞の受容野について、説明せよ',
          answerImg: [retinalGanglion],
          answer:
            '中心にオンの刺激、周辺にオフの刺激を受けたときに最も活動が活発になる、中心-周辺拮抗型受容野。',
          commentary:
            '網膜神経節細胞は網膜から脳への唯一の出力細胞で、グルタミン酸受容体をもちグルタミン酸作動性ニューロン。M型神経節細胞は大型で外側膝状体大細胞層へ出力し、P型神経節細胞は小型で外側膝状体小細胞層へ出力される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】視線を保持する眼球運動には2種類あり、頭が動いたときに反対方向に眼球を動かすことで網膜に映る外界がぶれないようにしている( a )と、周りの視界が動くときに、網膜に映る外界の像がぶれないように眼球が動く( b )に分類される。眼球を動かせる範囲には限りがあるため、これらの眼球運動中は定期的に眼の位置をリセットする( c )が行われる。',
          answerImg: [eyeMovement],
          answer: 'a.前庭動眼反射　b.視運動性反応　c.眼振',
          commentary:
            '例えば電車に乗っていると、視運動性反応（緩徐相）→視運動性眼振（急速相）が交互に起こりながら、一定した視線を維持している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】対象物に中心窩を向ける眼球運動には3種類あり、視覚的探索などで行われる素早い眼球運動を( d )、ゆっくり動く視覚対象物の網膜像を網膜中心窩付近に維持し、その動きに合わせて視線を滑らかに動かす随意性眼球運動を( e )、近くや遠くを見るときに両眼が寄ったり離れたりする眼球運動を( f )という。(d)や定位反応は脳幹の( g )で制御されており、(g)では網膜部位再現や(d)のモーターマップが形成されている。',
          answerImg: [eyeMovement],
          answer:
            'd.サッケード/衝動性眼球運動　e.追跡眼球運動　f.輻輳・開散運動　g.上丘',
          commentary:
            '定位反応：外部から何らかの刺激が提示されると、そちらの方向へ視線などを向ける行動をとること。視覚・聴覚・体性感覚情報が上丘に収束して制御を行っている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '伸張反射について、次の語句に続く形で説明しなさい。【筋が引き伸ばされると...】',
          answerImg: [stretchReflex],
          answer:
            '筋が引き伸ばされると、筋紡錘からの興奮がⅠa線維を通して脊髄へ伝えられ、同名筋や協同筋を支配するα運動ニューロンを興奮させる。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '伸張反射が単シナプス性で自原性反射といえる理由を説明せよ。',
          answerImg: [stretchReflex],
          answer:
            '伸張反射では脊髄に入るⅠa群線維が直接α運動ニューロンとシナプスを形成しているので、単シナプス性といえる。また、伸張反射では筋紡錘の同名筋を支配するα運動ニューロンを興奮させるため、自原性反射といえる。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'マウス海馬の神経細胞にテタヌス刺激を行ったところ、シナプス応答の増大が数時間以上持続した。この現象を何というか。また、テタヌス刺激とは何か、簡潔に説明せよ。',
          answerImg: [LTP],
          answer: '現象：長期増強(LTP)　テタヌス刺激：高頻度の電気刺激',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '蝸牛の有毛細胞について、感覚毛の屈曲から神経伝達物質放出までの機構を説明せよ。また、放出された神経伝達物質を受け取る細胞は何か、答えよ。',
          answerImg: [hairCell],
          answer:
            '感覚毛が適方向に屈曲すると先端の機械受容器チャネルが開き、内リンパ液からK⁺が細胞内へ流入する。この脱分極により、電位依存性Ca²⁺チャネルが開口し、シナプス小胞から神経伝達物質（グルタミン酸）が放出される。この神経伝達物質はラセン神経節ニューロン（の神経突起）が受容する。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '誘発筋電図について、皮膚の電気刺激によってH波とM波が生じる機序について説明せよ。また、刺激強度を増すとH波が消滅した理由について、簡潔に説明せよ。',
          answerImg: [electromyogram],
          answer:
            '電気刺激がⅠa群線維に伝わって脊髄に入り、α運動ニューロンを通じて筋肉を興奮させる経路でH波は生じ、電気刺激がα運動ニューロンに伝わり筋肉を興奮させる経路でM波が生じた。刺激強度を増すとα運動ニューロンから脊髄へ伝播する活動電位とH波の経路で伝わる活動電位が衝突し、筋電図でH波がみられなくなる。',
          commentary:
            'H波はⅠa群線維→α運動線維→筋、M波はα運動線維→筋。活動電位が衝突すると不応期の関係で両方とも消滅する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】運動神経終末が脱分極すると、電位依存性( a )チャネルが開口することで細胞内に(a)が流入し、シナプス小胞がシナプス前膜に融合することで神経伝達物質である( b )が神経筋接合部のシナプス間隙に( c )放出される。運動終板の(b)受容体チャネルは開口すると( c )イオンを受動輸送し、電位依存性Na⁺チャネルが開口して活動電位が発生する。シナプス間隙に放出された(b)は速やかに( d )によって処理され、再びシナプス小胞に輸送される。',
          answerImg: [NMJ, recycleNeurotransmitter],
          answer:
            'a.Ca²⁺　b.アセチルコリン　c.陽イオン　d.アセチルコリンエステラーゼ(AChE)',
          commentary:
            '神経伝達物質は放出されると速やかにシナプス間隙から除去される。アセチルコリンなら分解され、グルタミン酸・GABA・グリシン・モノアミンは回収される。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    // {
    //   groupTag: '2017追試',
    //   groupContents: [
    //     {
    //       detailInfo: '',
    //       questionImg: [],
    //       questionSentence: '活動電位の生成機構を説明せよ',
    //       answerImg: [actionPotential],
    //       answer:
    //         '電気刺激により電位依存性Na⁺チャネルが開口するとNa⁺が細胞内へ流入し膜電位は脱分極する。このNa⁺チャネルは速やかに不活化し、遅延整流性K⁺チャネルの開口でK⁺が細胞外へ流出すると膜電位は再分極される。',
    //       commentary: '',
    //     },

    //     {
    //       detailInfo: '',
    //       questionImg: [],
    //       questionSentence:
    //         '軸索において活動電位の伝播が不減衰である理由を説明せよ',
    //       answerImg: [nonDecrementalConduction],
    //       answer:
    //         '軸索では、伝わった活動電位が電位依存性Na⁺チャネルの閾値を超えると活動電位を発生させ、さらに近くの細胞膜で活動電位を発生させることで、局所的な活動電位の発生が伝わっていく。この活動電位の大きさが減衰せず一定であるから。',
    //       commentary: '樹状突起や細胞体では減衰する',
    //     },
    //     {
    //       detailInfo: '',
    //       questionImg: [],
    //       questionSentence:
    //         '軸索は刺激に対して両方向へ伝導する性質を持っているのに、通常は片方向へしか伝導しない理由を説明せよ',
    //       answerImg: [unidirectionalConduction],
    //       answer:
    //         '通常は細胞体から軸索へ活動電位が伝わり、局所的な活動電位の発生が軸索を伝わっていくが、活動電位発生後の不応期により伝わる方向と逆方向の細胞膜は脱分極できない（しにくい）ため。',
    //       commentary: '',
    //     },
    //     {
    //       detailInfo: '',
    //       questionImg: [],
    //       questionSentence: '化学シナプスでの興奮伝達について説明しなさい',
    //       answerImg: [recycleNeurotransmitter],
    //       answer:
    //         '活動電位がシナプス前終末に伝達されると、電位依存性Ca²⁺チャネルが開口しCa²⁺が流入することで、シナプス小胞のシナプトタグミンがCa²⁺と結合しシナプス前膜にシナプス小胞が融合し、神経伝達物質の開口放出が行われる。シナプス後部の受容体に神経伝達物質が結合すると陽イオンチャネルが開口し、興奮が伝達されていく。',
    //       commentary: '',
    //     },
    // {
    //   detailInfo: '',
    //   questionImg: [],
    //   questionSentence:
    //     '',
    //   answerImg: [],
    //   answer: '',
    //   commentary: '',
    // },
    // {
    //   detailInfo: '',
    //   questionImg: [],
    //   questionSentence:
    //     '',
    //   answerImg: [],
    //   answer: '',
    //   commentary: '',
    // },
    // {
    //   detailInfo: '',
    //   questionImg: [],
    //   questionSentence:
    //     '',
    //   answerImg: [],
    //   answer: '',
    //   commentary: '',
    // },
    // {
    //   detailInfo: '',
    //   questionImg: [],
    //   questionSentence:
    //     '',
    //   answerImg: [],
    //   answer: '',
    //   commentary: '',
    // },
    // {
    //   detailInfo: '',
    //   questionImg: [],
    //   questionSentence:
    //     '',
    //   answerImg: [],
    //   answer: '',
    //   commentary: '',
    // },
    //   ],
    // },
    {
      groupTag: '2016本試',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '骨格筋について間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '横紋筋である',
            '随意筋である',
            '多核である',
            '運動ニューロンが支配している',
            'サルコメアがある',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '筋線維について間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            'I帯は屈折率低い',
            'A帯には太いフィラメントがある',
            '太いフィラメントはミオシンである',
            '細いフィラメントはアクチンである',
            '筋線維が集まって筋原線維になる',
          ],
          answerImg: [sarcomere],
          answer: '筋線維が集まって筋原線維になる',
          commentary:
            '筋原線維が集まって筋線維（複数の筋原線維 + T細管 + 筋小胞体）になる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '反射の特徴について間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '意識しなくても起こる',
            '同じパターンの反応が起こる',
            '感覚刺激の発生が必要',
            '刺激があれば必ずおこる',
            '脊椎動物でもおこる',
          ],
          answerImg: [],
          answer: '感覚刺激の発生が必要？',
          commentary: '根拠不明',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '脳幹の働きとして間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '頭部顔面の運動パターン',
            '頚反射',
            '歩行',
            '姿勢',
            '眼球運動',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary:
            '頭部に関わる反射は脳幹を経由する。また、姿勢の調節には前庭器入力が必要。歩行運動の基本的なリズムとパターンを作る神経回路は脊髄内に存在するが、歩行神経回路を駆動する領域は脳幹に存在する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '瞳孔対光反射に直接関係ないものを全て選べ（全て関係ある場合もある）',
          choices: ['網膜', '毛様体', '視蓋前域', '動眼神経核', 'EW核'],
          answerImg: [lightReflex],
          answer: '動眼神経核',
          commentary: '動眼神経副核：Edinger-Westphal核',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ウェルニッケ失語の患者で良好なものを全て選べ（全て良好でない場合もある）',
          choices: ['呼称', '復唱', '理解', '自発発話', '読字'],
          answerImg: [aphasia],
          answer: '自発発話',
          commentary:
            'ウェルニッケ野は感覚性言語野とも呼ばれ、視覚や聴覚からの言語情報を理解できない。多弁で流暢に話すが、その内容が意味のないものになる。呼称や復唱も傷害される。ちなみにウェルニッケ脳症とはビタミンB₁不足による乳頭体の異常で、ウェルニッケ野とは無関係。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '味覚に関して間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '甘味は代謝型受容体である',
            '苦味は代謝型受容体である',
            '酸味はイオンチャネル型受容体である',
            '塩味は代謝型受容体である',
            '旨味は代謝型受容体である',
          ],
          answerImg: [taste],
          answer: '塩味は代謝型受容体である',
          commentary: '塩味はイオンチャネル型受容体である',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '視床下部腹内側核が損傷したとき起こるものを全て選べ（全て起こらない場合もある）',
          choices: ['尿崩症', '無食', '過食', '性欲亢進', '体温上昇'],
          answerImg: [],
          answer: '過食',
          commentary:
            '視床下部腹内側VMHは満腹中枢とも呼ばれ、グルコース受容ニューロンがグルコースに反応して摂食抑制を行う。また、雌の性行動を亢進する。尿崩症の原因となるバソプレシンは視床下部室傍核・視索上核から分泌される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '次のうち潜在記憶でないものを全て選べ（全て正しい場合もある）',
          choices: [
            '意味記憶',
            '手続き記憶',
            'プライミング',
            'オペラント条件付け',
            '感作',
          ],
          answerImg: [longMemory],
          answer: '意味記憶',
          commentary: '陳述できる記憶は非潜在記憶',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '痛覚を伝える早い線維を全て選べ（全て正しい場合もある）',
          choices: ['Aα', 'Aβ', 'Aδ', 'B', 'C'],
          answerImg: [sensoryReceptors],
          answer: 'Aδ',
          commentary: 'Aは有髄線維、Cは無髄線維。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Kluver-Bucy症候群の症状として不適なものを全て選べ（全て正しい場合もある）',
          choices: ['口唇傾向', '性欲亢進', '情動性反応', '温和になる'],
          answerImg: [],
          answer: '情動性反応',
          commentary:
            'クリーヴァー・ビューシー症候群は扁桃体が破壊されることによる疾患で、口唇傾向（手に取ったものを全て口に持って行ってしまう）・視覚失認症・短期記憶障害・尿便失禁・食欲亢進・情動の欠如（温和化）・精神盲（視覚性失認）・性欲亢進を伴う。',
        },
        {
          detailInfo: '問題2(1)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(1)運動ニューロンで生じる活動電位の生成機構について説明せよ。',
          answerImg: [actionPotential],
          answer:
            '電位依存性のNa⁺チャネルが開いてNa⁺が流入し、周囲の更なるNa⁺チャネルの活性化が引き起こされ、これによりさらに細胞膜の脱分極が進む。こうした機構ではNa⁺チャネルが連鎖的に活性化し、膜電位は一気にそのピークへ向かい、活動電位が発生する。一度活性化したNa⁺チャネルはすぐ不活性化されるので、Na⁺の流入はその後止まり、代わって電位依存性のK⁺チャネルが開き、外向きにK⁺が流れることで細胞膜は再分極し、内向き整流性K⁺チャネルの働きにより静止電位となって安定する。',
          commentary:
            'Na⁺やCa²⁺チャネルが主に脱分極方向へ、K⁺チャネルなどが再分極へ寄与する。',
        },
        {
          detailInfo: '問題2(2)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(2)活動電位の軸索伝導には、（有髄・無髄に関わらず）3つの様式がある。3つとも答えよ。',
          answerImg: [conduction],
          answer: '不減衰伝導・両方向伝導・絶縁伝導',
          commentary:
            '一度発生した活動電位は途中で消滅することはない（不減衰伝導）。活動電位は細胞膜を両方向に伝わりうる（両方向性伝導）。活動電位が隣接する神経線維間で乗り移ることはない（絶縁伝導）有髄線維では跳躍伝導も見られる。',
        },
        {
          detailInfo: '問題2(3)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(3)有髄線維における興奮伝導に跳躍伝導がある。跳躍伝導がどのような伝導か説明せよ',
          answerImg: [conduction],
          answer:
            '髄鞘（ミエリン）が絶縁体となるため、局所電流がランビエ絞輪間で流れることになる。このため局所電流による活動電位の発生も、ランビエ絞輪の部分で飛び飛びに起こることになり、無髄線維に比べて早く活動電位が伝えられる。',
          commentary: '',
        },
        {
          detailInfo: '問題2(4)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(4)神経筋接合部では終板電位が生じるメカニズムを以下の文に続けて説明せよ。（解答）活動電位が軸索終末まで到達すると、...',
          answerImg: [NMJ],
          answer:
            '活動電位が軸索終末まで到達すると、軸索終末のCa²⁺チャネルが開き、Ca²⁺が流入することで、シナプス小胞が細胞膜に結合しアセチルコリンが放出され、運動終板にあるニコチン型アセチルコリン受容体に結合すると、Na⁺チャネルが開き、脱分極が生じる。',
          commentary: '',
        },
        {
          detailInfo: '問題2(5)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(5)筋収縮が生じるメカニズムを以下の文に続けて説明せよ。（解答）筋線維が興奮すると、...',
          answerImg: [skeletalMuscle, excitationContractionCoupling],
          answer:
            'T管を通して、活動電位が細胞内に伝導する。triadで隣接する筋小胞体で、DHP受容体の構造変化によってCa²⁺放出チャネル（リアノジン受容体）が開き、Ca²⁺が細胞内に放出される。Ca²⁺がトロポニンに結合し、ATPを分解しながらアクチンがミオシンに滑り込むことによって、クロスブリッジがスライドし、筋収縮が生じる。',
          commentary: '',
        },
        {
          detailInfo: '問題2(6)(a)~(f)',
          questionImg: [],
          questionSentence:
            '次の文の空欄を埋めよ：筋収縮には、一回の活動電位に従って発生する( a )、適当な間隔で2個の刺激によって大きな収縮が生じる( b )、非伝導性の収縮で様々の化学物質、薬物や低温度などによっておこる可逆的な収縮( c )、不可逆的な持続収縮で筋のタンパク質が変性し筋実質が短縮状態になった( d )がある。(c)と(d)の代表的なものとしてそれぞれ( e )( f )がある。',
          answerImg: [tetanus],
          answer:
            'a.単収縮　b.加重　c.拘縮　d.硬直　e.カフェイン拘縮　f.死硬直',
          commentary: '',
        },
        {
          detailInfo: '問題2(6)(g)~(o)',
          questionImg: [],
          questionSentence:
            '次の文の空欄を埋めよ：筋長を変化させずに収縮することを( g )収縮といい、筋力を一定に保って収縮させることを( h )収縮という。運動ニューロンとそれが支配する筋線維群をまとめて( i )と呼ばれている。(i)を大別するとS型とF型に分けられる。S型では運動ニューロンの伝達速度が( j )、発生する筋力が( k )が、繰り返し収縮することに対し( l )。一方、F型（特にFF型）では運動ニューロンの伝達速度が( m )、発生する筋力が( n )、繰り返し収縮することに対して( o )',
          answerImg: [typeOfMuscle],
          answer:
            'g.等尺性　h.等張性　i.運動単位　j.遅く　k.弱い　l.強い　m.早く　n.強い　o.弱い',
          commentary:
            'S型はⅠ型(type 1)とも呼ばれ、遅筋に分類される。F型はⅡ型(type 2)とも呼ばれ、速筋に分類される。',
        },

        {
          detailInfo: '問題3(1)',
          questionImg: [exam20161],
          questionSentence:
            '杆体での光受容体機構を調べるために下図のような実験を行った。この実験で用いた膜の一部を取り出して行うパッチクランプの方法を答えよ',
          answerImg: [],
          answer: 'インサイドアウト',
          commentary:
            '2022年度の生理学実習で用いたパッチクランプの方法はホールセル法。',
        },
        {
          detailInfo: '問題3(2)',
          questionImg: [exam20161],
          questionSentence:
            '杆体での光受容体機構を調べるために下図のような実験を行った。チェンバー内の溶液は細胞内溶液または細胞外溶液のどちらに該当するか',
          answerImg: [],
          answer: '細胞内溶液',
          commentary:
            '同じパッチクランプでも、細胞膜を破壊しない方法（cell-attached recording）では溶液の調製は不要。実習で用いたホールセル法でもガラスピペット内の溶液を細胞内用液と揃える必要がある。',
        },
        {
          detailInfo: '問題3(3)',
          questionImg: [exam20161],
          questionSentence:
            '杆体での光受容体機構を調べるために下図のような実験を行った。チェンバー内にある物質を入れたところ、図のような電流応答が得られた。入れた物質名を答えよ。',
          answerImg: [photoreception],
          answer: 'cGMP',
          commentary:
            '細胞膜のcGMP依存性陽イオンチャネルがクランプされているため、cGMPに反応して開口する。',
        },
        {
          detailInfo: '問題3(4)a~c',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】杆体は暗中において( a )しているが、それは杆体に存在する( b )チャネルがグアニル酸シクラーゼによって合成された( c )によって開くためである。',
          answerImg: [photoreception],
          answer: 'a.脱分極　b.cGMP依存性（陽イオン）　c.cGMP　',
          commentary: '視細胞は暗中で脱分極し、光を受けると過分極する。',
        },
        {
          detailInfo: '問題3(4)d~i',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】杆体に光が当たると( d )が光を吸収しメタロドプシンⅡと変化し、メタロドプシンⅡがトランスデューシンの( e )を( f )に変えることでトランスデューシンを活性化する。トランスデューシンは( g )を活性化し、(g)がcGMPを加水分解することにより細胞内の( h )濃度が減少する。その結果、cGMP依存性陽イオンチャネルが閉じて、(h)の流入が生じないため( i )応答を示す。',
          answerImg: [photoreception],
          answer:
            'd.ロドプシン　e.GDP　f.GTP　g.ホスホジエステラーゼ(PDE)　h.Na⁺(陽イオン)　i.過分極',
          commentary:
            'cGMP依存性Na⁺チャネルはCa²⁺も通すが、即時の過分極応答にはNa⁺の移動が、グアニル酸シクラーゼを抑制しcGMP合成を阻害する作用にCa²⁺が関与している。',
        },
        {
          detailInfo: '問題4-1',
          questionImg: [exam20162],
          questionSentence:
            '大脳基底核疾患のひとつであるパーキンソン病は、黒質緻密部のドーパミンニューロンの脱落により生じる。黒質緻密部のドーパミンニューロンが脱落すると、淡蒼球内節・黒質網様部の活動が上昇することが知られている。淡蒼球内節・黒質網様部のニューロン活動の上昇がどのようにして生じるのかについて、正常時のD1受容体と直接路について説明せよ。',
          answerImg: [],
          answer:
            'D1受容体は、黒質緻密部からのドーパミンを受け取り、直接路に関与する線条体の活動を抑制する。この線条体は淡蒼球内節・黒質網様部の活動を直接抑制しているため、D1受容体がドーパミンを受容しなくなると淡蒼球内節・黒質網様部の活動が増す。',
          commentary: '直接路は脱抑制系とも。',
        },
        {
          detailInfo: '問題4-2',
          questionImg: [exam20162],
          questionSentence:
            '大脳基底核疾患のひとつであるパーキンソン病は、黒質緻密部のドーパミンニューロンの脱落により生じる。黒質緻密部のドーパミンニューロンが脱落すると、淡蒼球内節・黒質網様部の活動が上昇することが知られている。淡蒼球内節・黒質網様部のニューロン活動の上昇がどのようにして生じるのかについて、正常時のD2受容体と間接路について説明せよ。',
          answerImg: [],
          answer:
            'D2受容体は、黒質緻密部からのドーパミンを受け取り、間接路に関与する線条体の活動を促進する。この線条体は淡蒼球外節の活動を抑制し、淡蒼球外節は視床下核の活動を抑制し、視床下核は淡蒼球内節・黒質網様部の活動を促進するので、D2受容体がドーパミンを受容しなくなると視床下核や淡蒼球内節・黒質網様部の活動が増す。',
          commentary: '間接路は抑制強化系とも。',
        },
        {
          detailInfo: '問題5',
          questionImg: [],
          questionSentence:
            '伸張反射について、以下の語句を用いて説明せよ。【語句:筋紡錘・ゴルジ腱受容器・Ⅰa群線維・Ⅰb群線維・抑制性介在ニューロン・α運動ニューロン・単シナプス性・多シナプス性・同名筋・自原性・自原抑制】　筋が引き伸ばされると...',
          answerImg: [stretchReflex],
          answer:
            '筋が引き伸ばされると、筋紡錘も伸張され、発生した興奮を1a群線維に伝達する。1a群線維は、脊髄内で同名筋を支配するα運動ニューロンに直接シナプス結合し、これを興奮させ、同名筋を収縮させる。伸張反射は同名筋に最も強く作用するので自原性反射とよばれ、また1a群線維がα運動ニューロンに直接結合しているので、単シナプス性反射である。',
          commentary:
            'Ⅰa群線維は12~20μm径の有髄軸索で、筋紡錘錘内筋で一次終末を形成している感覚（求心性）線維。',
        },
        {
          detailInfo: '問題5',
          questionImg: [],
          questionSentence:
            'ゴルジ腱反射について、以下の語句を用いて説明せよ。【語句：筋紡錘・ゴルジ腱受容器・Ⅰa群線維・Ⅰb群線維・抑制性介在ニューロン・α運動ニューロン・単シナプス性・多シナプス性・同名筋・自原性・自原抑制】　筋が収縮すると...',
          answerImg: [tendonReflex],
          answer:
            '筋が収縮すると、筋にかかる張力をゴルジ腱器官が感知し、その興奮をⅠb群線維が脊髄へ伝える。Ⅰb群線維は脊髄内で抑制性介在ニューロンに接続し、抑制性介在ニューロンは同名筋の運動ニューロンを抑制する。ゴルジ腱反射は抑制性介在ニューロンを介しているので多シナプス性反射であり、また同名筋へのα運動ニューロンを抑制するので、自原抑制である。',
          commentary:
            'ゴルジ腱反射は同名筋を抑制し、拮抗筋を収縮させることで、筋に過度の張力がかかるのを防いでいる。',
        },
        {
          detailInfo: '問題5(2)',
          questionImg: [],
          questionSentence:
            '伸張反射において、筋長を一定に保つために筋長の目標値が設定されるが、その設定に関連すると考えられるニューロンは何か。',
          answerImg: [alphaGammaLinkage],
          answer: 'γ運動ニューロン',
          commentary: '参考：α-γ連関',
        },
        {
          detailInfo: '問題5(3)',
          questionImg: [],
          questionSentence:
            '伸張反射では求心性活動が高まれば遠心性活動が高まり、結果的に求心性活動が弱まるという制御系になっている。この制御系をなんというか。',
          answerImg: [servo],
          answer: 'サーボ機構',
          commentary:
            'γ運動ニューロンの活動で設定された目標値に対して、筋長が長いと伸張反射が起こり、筋長が短いと拮抗筋に伸張反射が起こる。伸張反射は同名筋・協同筋・拮抗筋に信号を送るため、両者がつりあったところで筋長が保たれる機構。',
        },
        {
          detailInfo: '問題6',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】眼球運動の目的は、視覚対象へ( a )を向けるためと( b )を保持するためである。前者のうち、動く対象物へ(a)を合わせる眼球運動を( c )と呼び、大脳高次視覚野の( d )野が関与している。',
          answerImg: [eyeMovement],
          answer: '(a)中心窩　(b)視線　(c)(滑動性)追跡眼球運動　(d)MT　',
          commentary:
            '追跡眼球運動はゆっくりとした眼球運動で、サッケードは非常に素早く中心窩を向ける眼球運動。',
        },
        {
          detailInfo: '問題6',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】視覚的探索に用いられ、500度/秒もの速さで動く眼球運動を( e )とよび、定位反応にも関与する( f )が関与している。視線を保持する眼球運動には( g )と( h )があり、(g)は自身が動いたときに、(h)は網膜上に投影される視覚像全体が動いたときに視線を保持するために用いられる。動物の進化にともない(g)や(h)の緩除相から( i )が、急速相から( j )が生じたと考えられる。',
          answerImg: [eyeMovement],
          answer:
            '(e)サッケード　(f)上丘　(g)前庭動眼反射　(h)視運動性反応　(i)追跡眼球運動　(j)サッケード',
          commentary:
            '視運動性反応は電車の窓からの風景のイメージ、視運動性眼振はそのリセット。中心窩視は肉食動物で発達している。',
        },
        {
          detailInfo: '問題7',
          questionImg: [],
          questionSentence:
            '人間が感覚と運動の結びつきをどのように学習するかを調べる方法の一つにプリズム適応実験がある。この実験の内容を具体的に（方法やその結果など）説明せよ',
          answerImg: [prismAdaptation],
          answer:
            'プリズム眼鏡をかけると目標地点まで手を伸ばす運動予測と結果がずれ、その誤差が試行を繰り返すごとに補正されていく過程を記録する。大きな誤差は眼鏡をつけた直後と外した直後にみられ、右手で試行を行った場合は左手に逆適応現象はみられない。したがって、プリズム適応現象は運動出力の段階で起こっており、視覚入力情報が補正されるわけではない。',
          commentary:
            '左手眼鏡なし→右手眼鏡なし→右手眼鏡あり→左手眼鏡なし→右手眼鏡なしの順で、右手眼鏡ありの段階で適応現象が、右手眼鏡なしの段階で逆適応現象が記録される。「運動の学習」。',
        },
        {
          detailInfo: '問題8(1)',
          questionImg: [exam20163],
          questionSentence:
            '視覚性の提示信号をもとに左右のどちらかまたは同時にレバーを押す課題（図の上）をサルに課した。例えば、提示信号が左のみ点灯すれば、ゴー信号が点灯するまで待機し、ゴー信号の点灯後に左のレバーのみを押す試行を行う。図の下はこの課題を行っている時の大脳皮質運動野の異なる領域から記録された3つのニューロン活動をラスタープロットとヒストグラムで示したものである（ラスタープロットが密なほど、ヒストグラムが高いほどニューロン活動は高いことを示す）。ラスタープロットの上に書かれた矢印は運動が開始された時点を示す。　このとき、ニューロンA・B・Cは課題の遂行にあたりそれぞれどのような活動をするのか図をもとに説明せよ。',
          answerImg: [],
          answer:
            'A.運動をするときに活動する　B.右手だけを使うときに活動する　C.右手を使うときに活動する　',
          commentary: '',
        },
        {
          detailInfo: '問題8(2)',
          questionImg: [exam20163],
          questionSentence:
            '視覚性の提示信号をもとに左右のどちらかまたは同時にレバーを押す課題（図の上）をサルに課した。例えば、提示信号が左のみ点灯すれば、ゴー信号が点灯するまで待機し、ゴー信号の点灯後に左のレバーのみを押す試行を行う。図の下はこの課題を行っている時の大脳皮質運動野の異なる領域から記録された3つのニューロン活動をラスタープロットとヒストグラムで示したものである（ラスタープロットが密なほど、ヒストグラムが高いほどニューロン活動は高いことを示す）。ラスタープロットの上に書かれた矢印は運動が開始された時点を示す。　このとき、ニューロン活動からニューロンA・B・Cは課題の遂行にそれぞれどのような役割があるのか述べよ',
          answerImg: [planningAction],
          answer:
            'A.運動の企画や準備（動作への変換）　B.運動の調節　C.運動の出力',
          commentary:
            'Aは「レバーを押す」動作に、Bは運動の組み合わせに、Cは筋活動に関連して活動していると考えられる',
        },
        {
          detailInfo: '問題8(3)',
          questionImg: [exam20163],
          questionSentence:
            '視覚性の提示信号をもとに左右のどちらかまたは同時にレバーを押す課題（図の上）をサルに課した。例えば、提示信号が左のみ点灯すれば、ゴー信号が点灯するまで待機し、ゴー信号の点灯後に左のレバーのみを押す試行を行う。図の下はこの課題を行っている時の大脳皮質運動野の異なる領域から記録された3つのニューロン活動をラスタープロットとヒストグラムで示したものである（ラスタープロットが密なほど、ヒストグラムが高いほどニューロン活動は高いことを示す）。ラスタープロットの上に書かれた矢印は運動が開始された時点を示す。　このとき、ニューロンA・B・Cはそれぞれ大脳皮質のどの領域から記録されたと考えられるか答えよ。',
          answerImg: [varietyMotorArea],
          answer: 'A.運動前野（腹側部）　B.補足運動野　C.一次運動野',
          commentary:
            '視覚対象の空間的位置に関連する情報で条件付けられるときに強く活動するのは運動前野腹側部。運動前野背側部は色情報などの抽象的な情報で条件付けられるときに強く活動する。',
        },
        {
          detailInfo: '問題9(1)',
          questionImg: [],
          questionSentence:
            '野生型と変異型のマウスを用いて電気生理学的・行動学的解析を行った。野生型マウスの海馬CAの錐体細胞から記録を行っている時、求心性線維に高頻度のテタヌス刺激を与えたところ錐体細胞でのシナプス電位が刺激間に比べて増大し、それが一時間以上も続く現象がみられた。この現象をなんというか。',
          answerImg: [LTP],
          answer: '長期増強/LTP',
          commentary: '',
        },
        {
          detailInfo: '問題9(2)',
          questionImg: [],
          questionSentence:
            'あるグルタミン酸受容体を欠損させた変異型のマウスでは錐体細胞において長期増強（LTP）はみられなかった。このグルタミン酸受容体は何か。',
          answerImg: [LTP],
          answer: 'NMDA受容体',
          commentary:
            '長期増強では、NMDA受容体から流入するCa²⁺がAMPA受容体の数の増加やリン酸化を誘導する',
        },
        {
          detailInfo: '問題9(3)',
          questionImg: [],
          questionSentence:
            'マウスの錐体細胞において、細胞外液のCa²⁺濃度を低下させると長期増強（LTP）はみられなかった。その理由を60~70字で述べよ。',
          answerImg: [LTP],
          answer:
            '長期増強の発現には、NMDA受容体によってCa²⁺が細胞内に流入し、細胞内シグナル伝達系を活性化する必要があるから。',
          commentary: '',
        },
        {
          detailInfo: '問題9(4)',
          questionImg: [],
          questionSentence:
            'マウスの錐体細胞において、-70mVに膜電位を固定した状態で求心性線維に高頻度のテタヌス刺激を与えても長期増強（LTP）はみられなかった。その理由を50~60字で述べよ。',
          answerImg: [LTP],
          answer:
            '長期増強の発現には、（静止膜電位付近では）Mg²⁺でブロックされているNMDA受容体を、脱分極することで開口させる必要があるから。',
          commentary: '',
        },
        {
          detailInfo: '問題9(5)',
          questionImg: [exam20213],
          questionSentence:
            '図は、モリス水迷路における野生型マウスと変異型（NMDA受容体欠損）マウスの動きをトレースしたものである。それぞれどちらか答えよ。',
          answerImg: [],
          answer: 'A.野生型　B.変異型',
          commentary:
            '長期増強は記憶にも関与しており、Bでは浅瀬の位置情報の記憶が妨げられている',
        },
        {
          detailInfo: '問題9(6)',
          questionImg: [],
          questionSentence:
            '海馬は記憶に関与しているが、H.M氏やR.B氏のように海馬の損傷によって生じる典型的な症状は何か',
          answerImg: [hippocampusKO],
          answer: '健忘症',
          commentary:
            '健忘症amnesiaとは、必要な情報を思い出せなくなる症状のこと。外傷性/心因性　順行性/逆行性　全健忘/部分健忘',
        },
        {
          detailInfo: '問題10',
          questionImg: [],
          questionSentence:
            '末梢受容野刺激とニューロン活動の関係を調べた結果と解釈について、次の空欄を埋めよ。・各層で記録された全てのニューロンが一つの( a )の感覚刺激にのみ応答する。・これらのニューロンはほぼ同一の( b )を持つ。・一つの垂直な( c )にあるすべてのニューロンはある部位の末梢の刺激に対してほぼ同じ( d )で発火した。...以上の実験的事実から、猫の体性感覚野には( e )的(c)が存在する事がわかった。',
          answerImg: [column],
          answer: '(a)種類　(b)受容野　(c)円柱/カラム　(d)潜時　(e)機能',
          commentary:
            '視床からの投射は、主に一次体性感覚野の3a・3b野に入力され、情報が統合=抽象化されながら受容野が拡大されながら1・2野へと伝達される',
        },
        {
          detailInfo: '問題11(1)',
          questionImg: [],
          questionSentence:
            '【報酬系について、空欄を埋めよ】報酬系は構成するニューロン群の( a )の放出と受容の( b )情動に基づく行動を引き起こす。たとえば、セロトニン神経系は( c )核から脳全体へと広範囲に投射している。セロトニン神経系においてセロトニン分泌量が過少であれば( d )になり、逆に過多であれば( e )となる',
          answerImg: [rewardCycle],
          answer: 'a.神経伝達物質　b.快　c.縫線　d.不安　e.攻撃的',
          commentary: '詳しい根拠は不明',
        },
        {
          detailInfo: '問題11(2)',
          questionImg: [],
          questionSentence:
            '報酬系について、視床下部が情動行動の動機付けに関与すると考えられるのはなぜか',
          answerImg: [pleasureSignal, dopamine],
          answer:
            '視床下部外側野を通るドーパミンニューロンの軸索を破壊すると、動物は摂食をやめにはするが食物に対する快楽の反応は減らない、すなわち視床下部を通るドーパミン軸索は動機付けに関与していることを発見したから。',
          commentary:
            'ドーパミンは快楽そのものではなく、情動行動に対しての「欲求・動機付け」に関与していると考えられるようになった。ドーパミン作動性ニューロンは黒質や腹側被蓋野VTA（中脳）に細胞体があって、視床下部を通過し前脳に投射している。',
        },
        {
          detailInfo: '問題12(1)',
          questionImg: [exam20211],
          questionSentence:
            '【空欄を埋めよ、アルファベットは図中と一致する。】におい物質が受容体タンパク質（図のR）に受容され、これとカップルしている( a )が活性化される。この活性化は次に( b )に伝えられ。その結果、ATPから( c )が産生される。(c)は、細胞膜に存在している( d )に直接働きかけて開口させることにより細胞内へ( e )や( f )が流入し、細胞を電気的に興奮させる。その(f)は( g )を活性化する。その結果( h )が細胞外へ流出して受容器電位応答を増幅する。順応はにおい応答によって大量に細胞内に流入した(f)や(g)に作用することによって生じる。',
          answerImg: [olfactory],
          answer:
            'a.Golf　b.アデニル酸シクラーゼ　c.cAMP　d.cAMP依存性陽イオンチャネル　e.Na⁺　f.Ca²⁺　g.Cl⁻チャネル　h.Cl⁻',
          commentary: '',
        },
        {
          detailInfo: '問題12(2)',
          questionImg: [],
          questionSentence:
            '（においに対する）順応とはどのような現象か？また、その意義について述べなさい。',
          answerImg: [],
          answer:
            '順応とは感度を下げずに感覚細胞のダイナミックレンジを広くする意義をもつ。濃い濃度のにおいの中でも、普通の濃度の時と同じように、細かいにおいの変化をすぐに感知し、周囲の環境の変化をすぐに知ることで、危険を回避することができる。',
          commentary: '',
        },
        {
          detailInfo: '問題13(1)',
          questionImg: [],
          questionSentence:
            '体性感覚について。内臓には侵害受容器が存在しないのに、内臓に痛みを感じることがある。どのようなメカニズムによるものなのか、述べなさい。',
          answerImg: [],
          answer:
            '内臓痛は平滑筋・骨格筋の強い収縮により、局所の虚血とそれに伴う組織液の酸性化、K⁺の放出、発痛物質の蓄積などにより、内臓の痛覚線維の興奮閾値が低下し、過敏となり生じる。また、閉塞に逆らって、内容物を移送することで強い収縮や伸展が起こると、痛みが生じる。',
          commentary: '関連痛の逆は生じにくい。',
        },
        {
          detailInfo: '問題13(2)',
          questionImg: [],
          questionSentence:
            '温熱受容器にはTRPイオンチャネルファミリーが局在し、様々な温度を感知することができる。では、体温ちかくの温度は感じないのはなぜか、答えなさい',
          answerImg: [],
          answer:
            'TRPイオンチャネルファミリーには、温度を感知するのに25℃ピークのものと40℃ピークのものがあるが、体温近くの温度である33℃でピークをもつものは存在しておらず、また、25℃と40℃でピークを迎えるものの間の温度であるから、体温ちかくの温度は感じない。',
          commentary: '',
        },
        {
          detailInfo: '問題14(1)',
          questionImg: [exam20164],
          questionSentence:
            '図は無麻酔ラットで記録したモノアミン作動性ニューロンA、およびコリン作動性ニューロンBの、覚醒・睡眠に伴う自発活動の変化を示している。記録は上から1秒当たりの自発発火頻度・単一ニューロン活動・皮質脳波・頚筋筋電図が示されている。( a )( b )( c )( d )( e )( f )は覚醒・レム睡眠・ノンレム睡眠のいずれの状態を示しているのか書きなさい。',
          answerImg: [monoamineCholine, EEG],
          answer:
            'a.覚醒　b.ノンレム睡眠　c.レム睡眠　d.ノンレム睡眠　e.レム睡眠　f.覚醒',
          commentary:
            'ノンレム睡眠特有の高振幅徐波からある程度絞り込むことができる。モノアミン/アセチルコリン/オレキシン/ヒスタミンは覚醒、コリンはレム睡眠を司る。REM睡眠時は首や胴部の筋肉が弛緩する。',
        },
        {
          detailInfo: '問題14(2)',
          questionImg: [exam20164],
          questionSentence:
            '図は無麻酔ラットで記録したモノアミン作動性ニューロンA、およびコリン作動性ニューロンBの、覚醒・睡眠に伴う自発活動の変化を示している。記録は上から1秒当たりの自発発火頻度・単一ニューロン活動・皮質脳波・頚筋筋電図が示されている。AとBのニューロンは興奮するとどのような伝達物質を放出するか答えなさい。',
          answerImg: [monoamineCholine],
          answer: 'A.モノアミン　B.アセチルコリン',
          commentary: '',
        },
        {
          detailInfo: '問題14(3)',
          questionImg: [],
          questionSentence:
            '覚醒・レム睡眠・ノンレム睡眠における、脳波・筋電図の特徴を述べなさい。',
          answerImg: [differencesNonREMtoREM, EEG],
          answer:
            '【脳波】覚醒時の脳波は閉眼している時などにα波が出たり、開眼したり何かに集中したりするとα波が消えたりしている。レム睡眠時は低電位で不規則なθ波やPGO spikesなどが見られ、ノンレム睡眠時は特徴的な高振幅徐波などがみられる。 【筋電図】覚醒状態では筋緊張がみられ、レム睡眠時には首や胴部の筋肉は弛緩している。ノンレム睡眠時は全体的に筋緊張が減少しており、眼球運動はみられない。。',
          commentary:
            '筋緊張は覚醒状態＞ノンレム睡眠＞レム睡眠で、例外は眼球運動。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
    appName,
    jpName,
  }
}
