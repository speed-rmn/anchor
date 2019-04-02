// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
// STYLES
import { colors } from '../../theme';
// COMPONENTS
import { Menu, Item } from '../../Menu';
import {
    Grid,
    Cell,
    CustomAdaptor,
    StandardBreakpoints,
    CenteredCell,
} from '../../Grid';
import { DropDown } from '../../DropDown';
import { Icon } from '../../Icon';
import { AutoComplete } from '../../AutoComplete';
import { Avatar } from '../../Avatar';

const StyledHeaderElement = styled.header`
    background-color: ${colors.grapePurchase.base};
    margin: 0;
    color: ${colors.white.base};
`;

const SecondaryContainer = styled.div`
    width: 100%;
    background-color: ${colors.grapePurchase.dark};
    > * {
        max-width: 1140px;
        margin: 0 auto;
    }
`;
const MainContainer = styled.div`
    width: 100%;
    > * {
        max-width: 1140px;
        margin: 0 auto;
    }
`;

interface HeaderProps {
    className?: string;
    children?: any;
    primary?: any;
    secondary?: any;
    // TODO: do we really want this?
    disableSearch?: boolean;
}

/* tslint:disable max-line-length */
const LargeLogo = () => (
    <svg
        width="176px"
        height="34px"
        viewBox="0 0 176 34"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-345.000000, -122.000000)" fill="#FFFFFF">
                <path
                    d="M374.063045,153.242568 C374.805066,153.320837 375.035844,153.737266 374.651214,154.331387 C374.317769,154.846031 373.043252,155.578559 370.925843,155.578559 C369.143974,155.578559 367.638979,155.016168 366.52041,153.889272 C365.595503,152.957293 364.978598,151.65361 364.298238,149.8374 C363.121001,146.695446 362.017099,142.79286 361.416957,140.560825 C360.474389,143.087806 359.526434,145.542561 358.660493,147.633469 C356.289258,153.361331 353.32716,155.908257 349.562577,155.908257 C347.091967,155.908257 345,154.364327 345,151.679901 C345,148.087371 347.924084,142.911624 357.267146,139.132033 C358.905339,134.734446 360.706664,129.627903 361.721069,126.73345 C361.41995,126.801444 361.082314,126.877598 360.686908,126.966142 C354.56905,128.338726 352.905115,131.197218 352.905115,133.432577 C352.905115,134.858347 353.562727,135.689694 354.660643,136.521343 C355.182662,136.916619 355.013544,137.906922 353.248737,137.906922 C350.660493,137.906922 348.42545,136.125464 348.42545,133.551945 C348.42545,129.750898 351.601863,126.05562 360.072399,124.392624 C362.338871,123.947788 364.480226,123.538914 367.405807,123.165397 C374.020242,122.320754 377,124.748915 377,128.436336 C377,132.448318 373.321024,136.023321 365.462005,138.818049 C366.057058,140.936457 367.269615,145.111324 368.494444,148.491409 C369.067647,150.073416 369.771953,151.295808 370.677405,152.041632 C371.670857,152.859683 372.715793,153.100232 374.063045,153.242568 Z M363,136.959525 C363.714078,136.696078 364.509144,136.397798 365.357329,136.071124 C369.870247,134.332375 372,131.84046 372,129.321323 C372,126.738374 370.247896,125.674341 366.83106,126.069219 C366.006386,128.482684 364.572714,132.629337 363,136.959525 Z M354.285671,145.854384 C354.714103,145.008906 355.315595,143.618527 356,141.946033 C349.258461,145.314097 348,149.512062 348,150.645423 C348,151.679842 348.573151,152.008399 349.310319,151.899072 C350.938117,151.657631 352.216175,149.936964 354.285671,145.854384 Z M464.152817,146.309244 C464.560959,146.309244 464.816009,146.589894 464.816009,147.125484 C464.816009,148.604632 462.29,150.921749 458.895961,150.921749 C456.289425,150.921749 454.753611,149.651328 454.169414,147.590989 C452.219947,150.055622 450.395403,150.865435 448.793759,150.865435 C447.250291,150.865435 445.832051,149.645207 445.832051,147.605067 C445.832051,145.837313 446.377975,144.422436 446.995547,142.48972 C447.898174,139.860431 449.833557,135.164987 451.476841,131.231917 C447.43645,138.21173 442.952094,145.905562 440.856577,149.675812 C440.058052,151.112725 438.085009,151.078447 438.219117,149.602666 C438.445693,147.112018 440.050704,137.581876 441.391173,130.449649 C439.778813,135.032772 437.607976,141.141563 436.137073,144.677071 C434.360905,148.945267 432.513703,150.785249 429.911148,150.785249 C428.431365,150.785249 426.811045,149.905351 426.160406,148.413349 C425.84963,147.700555 425.914847,147.129157 427.040682,147.036117 C431.212425,146.691809 432.972978,143.937344 435.192804,139.231801 C437.286484,134.793746 440.24911,126.004861 440.614387,125.161077 C441.314933,123.542982 441.543652,123.198368 442.553444,122.86569 C443.71449,122.483125 444.476579,122.324284 445.344302,122.069343 C446.057402,121.859698 446.507491,122.118312 446.317045,122.942203 C445.960648,124.482561 443.663357,139.371972 443.663357,139.371972 C443.663357,139.371972 451.407337,127.303438 453.206162,124.319435 C454.352512,122.41763 455.859544,122.534236 458.541707,122.141266 C459.288182,122.031699 459.682851,122.141266 459.459032,122.879156 C459.235518,123.617047 457.560697,127.105423 454.887413,133.411617 C453.538677,136.593636 452.006844,140.723802 450.935816,143.775137 C450.228839,145.789875 450.169746,146.844835 450.935203,146.883091 C451.632382,146.917981 452.726374,146.081848 454.039593,143.806354 C454.993659,138.203773 460.549043,132.724531 465.185572,132.724531 C467.060943,132.724531 469,133.990666 469,136.515592 C469,140.00856 465.274671,143.575285 459.100185,143.575285 C458.91372,143.575285 458.748075,143.570388 458.597433,143.562431 C458.493943,144.04385 458.436687,144.505682 458.436687,144.932012 C458.436687,146.665182 459.125598,147.495195 460.426876,147.495195 C462.34052,147.495195 463.412773,146.309244 464.152817,146.309244 Z M464.251672,135.962223 C463.058483,135.962223 461.155219,138.365158 460,140.948732 C464.646095,140.803927 466.031112,135.962223 464.251672,135.962223 Z M493.168275,127.881507 C491.667052,128.94511 489.915318,131.644609 488.76266,134.504567 C486.924246,139.066049 485.355708,143.154885 483.716474,148.02163 C483.193628,149.573533 482.538918,149.858024 480.591693,150.68139 C479.641903,151.082989 479.157171,151.082386 479.190675,149.884817 C479.235245,148.305217 479.500817,139.644061 479.767312,132.843383 C479.767927,132.823514 479.78975,132.787087 479.769771,132.783776 C479.756554,132.781668 479.762087,132.808462 479.758091,132.820804 C478.773874,135.976993 477.444167,140.052885 475.8661,144.263645 C474.239776,148.603556 472.651566,150.761168 469.629142,150.761168 C467.938576,150.761168 466.555385,149.858024 466.196678,149.030141 C465.891761,148.325989 465.815532,147.725699 466.913785,147.449638 C470.704956,146.496219 472.088147,144.589681 474.521332,139.484506 C476.7996,134.704764 478.605125,129.274457 479.563215,126.059263 C479.080635,126.055048 478.474797,126.051736 477.478286,126.051736 C469.793895,126.051736 470.26879,130.189643 472.574108,131.318574 C473.144904,131.597947 473.112015,132.718448 471.933844,132.718448 C465.581312,132.718448 464.812873,123.308284 475.084444,123.308284 C476.431979,123.308284 479.700919,123.309188 482.075396,123.310091 C482.579492,123.293533 483.084817,123.273062 483.628257,123.273062 C483.780408,123.273062 484.049977,123.290222 484.16432,123.369096 C484.419749,123.504267 484.458786,123.799896 484.433581,124.364361 C484.385631,125.445425 483.644241,135.119909 483.207153,141.226671 C483.204386,141.267012 483.213915,141.300428 483.229284,141.252562 C484.120366,138.511518 485.27118,135.073247 486.303655,132.296981 C487.924754,127.9369 489.992162,122.997302 494.031385,122.997302 C496.562316,122.997302 497.446021,125.643816 496.792848,126.17065 C496.366825,126.514146 494.974106,126.602052 493.168275,127.881507 Z M497.636892,132.970318 C499.714167,132.970318 501,134.664894 501,137.518642 C501,141.748353 497.252003,150.921749 490.723426,150.921749 C487.755891,150.921749 486,149.159904 486,146.306156 C486,142.298127 489.833165,132.970318 497.636892,132.970318 Z M492.137262,146.932542 C495.493144,146.932542 498.66045,135.962223 496.018764,135.962223 C493.161655,135.962223 488.956694,146.932542 492.137262,146.932542 Z M519.631399,128.071998 C521.321243,128.071998 521.133824,129.026525 520.706754,129.562058 C520.297198,130.076011 519.952777,130.388636 519.221843,130.949452 C518.351113,131.617559 517.379606,131.689703 514.894922,131.689703 C513.880094,131.689703 512.774322,131.674288 511.604644,131.649314 C510.20361,135.078334 508.507929,139.279977 506.881071,143.533725 C506.399926,144.791628 505.984532,145.70885 505.984532,146.596165 C505.984532,147.187194 506.253371,147.713787 507.021481,147.713787 C508.134934,147.713787 508.648339,147.694363 508.826541,148.253329 C509.133785,149.216796 507.943214,150.921749 505.063106,150.921749 C502.758775,150.921749 501.452986,149.275992 501.452986,147.349057 C501.452986,144.766964 503.195983,141.005278 504.410212,137.868536 C505.378953,135.365987 506.174716,133.245742 506.828225,131.518591 C502.634648,131.388485 498.054251,131.232172 493.822883,131.232172 C491.697674,131.232172 494.157472,129.024058 495.922283,128.945439 C500.423104,128.745346 504.524814,128.577317 508.014495,128.443819 C508.257217,127.839533 508.467987,127.342229 508.647725,126.963317 C509.494183,125.179746 509.677915,124.905042 511.207991,124.495606 C512.360157,124.187297 513.307391,123.994603 513.857973,123.994603 C514.474612,123.994603 514.587678,124.341452 514.357245,124.919532 C514.046314,125.699556 513.575308,126.847084 512.994002,128.261608 C516.587838,128.137051 518.9613,128.071998 519.631399,128.071998 Z M417.914258,131.973017 C416.57238,131.973017 415.746657,130.856764 416.070184,129.479623 C416.393712,128.102761 417.743654,126.986508 419.085532,126.986508 C420.42772,126.986508 421.253133,128.102761 420.929916,129.479623 C420.606389,130.856764 419.256136,131.973017 417.914258,131.973017 Z M424.226484,147.740796 C424.837699,147.842608 425.698902,147.40723 425.754523,148.250164 C425.841926,149.572198 424.302886,150.768877 422.456709,150.768877 C420.664319,150.768877 419.4153,149.384472 419.25394,147.060823 C417.525728,149.391809 415.630654,150.908907 413.504846,150.908907 C411.30172,150.908907 410.535867,148.967132 410.479635,147.119526 C408.459567,149.94337 406.762222,150.832471 405.100632,150.832471 C402.77404,150.832471 402.140515,149.042651 402.056168,147.264754 C400.598419,149.19858 398.752242,150.832471 396.620017,150.832471 C394.799205,150.832471 393.57219,149.601549 393.246107,147.476328 C391.621496,149.604607 389.875253,150.832471 387.859158,150.832471 C386.076548,150.832471 384.981556,149.43125 384.981556,147.520355 C384.981556,146.948615 385.052457,146.344772 385.172255,145.721362 C382.942541,148.444923 379.813117,150.921749 375.775121,150.921749 C372.769775,150.921749 371,148.742105 371,145.455365 C371,139.340501 377.188557,132.742867 382.269287,132.742867 C384.141134,132.742867 386.000146,134.058786 386.000146,136.300801 C386.000146,139.790249 382.358219,143.582688 376.195332,143.582688 C375.98813,143.582688 375.805071,143.576879 375.642182,143.567401 C375.50802,144.179193 375.431313,144.770806 375.431313,145.316558 C375.431313,146.73062 376.144296,147.842608 377.825138,147.842608 C382.141848,147.842608 386.051183,141.710011 388.610648,135.862671 C388.688272,135.68534 388.761313,135.536137 388.830991,135.408031 C389.455654,133.866779 390.190029,132.140553 390.848003,130.630793 C387.06305,130.553134 383.450766,130.49168 380.804814,130.49168 C378.690925,130.49168 380.679209,128.556937 382.43462,128.478972 C385.500172,128.342916 388.767425,128.206861 391.979668,128.078754 C392.168839,127.661109 392.327755,127.316842 392.443275,127.073776 C393.285225,125.304746 393.665706,124.855915 395.193745,124.473736 C396.212641,124.219052 396.549727,124.093085 397.485803,124.015121 C398.097019,123.964062 398.372372,124.392102 398.199092,124.779479 C397.913043,125.418788 397.424987,126.517629 396.820495,127.890111 C404.881512,127.582839 411.667227,127.357812 412.588023,127.357812 C414.268866,127.357812 414.082445,128.304393 413.65765,128.835469 C413.250275,129.345143 412.907689,129.655166 412.180648,130.211313 C411.314555,130.873859 410.348223,130.945403 407.876773,130.945403 C405.211568,130.945403 400.523545,130.840839 395.574227,130.731994 C393.600917,135.252102 391.125494,141.017808 389.845609,144.347046 C389.046139,146.427017 389.030859,147.307558 390.049449,147.307558 C391.07782,147.307558 392.418215,145.610071 393.454837,144.006754 C394.515296,139.440173 398.311861,132.950161 403.343388,132.950161 C404.999171,132.950161 405.765024,133.952082 406.117695,134.946053 C406.639367,133.987242 407.163179,133.431707 408.284149,133.2397 C410.066759,132.933957 411.390957,133.494384 411.390957,133.494384 C411.390957,133.494384 408.767926,138.526306 406.97248,143.418198 C406.204793,145.510093 405.425188,147.001815 406.781475,147.001815 C408.710777,147.001815 410.843614,142.856548 414.2435,135.556928 C414.328765,135.373788 414.403944,135.247822 414.471484,135.163436 C415.019438,134.116877 415.53836,133.517621 416.713728,133.316136 C418.496338,133.010393 419.820842,133.57082 419.820842,133.57082 C419.820842,133.57082 417.197505,138.602742 415.402059,143.494634 C414.634372,145.586529 414.345268,147.001815 415.414895,147.001815 C416.770571,147.001815 418.741741,144.193257 419.896938,142.336173 C421.960708,134.538497 428.451206,122.997302 433.636758,122.997302 C441.442592,122.997302 434.581698,138.037423 424.091405,142.94613 C423.665388,144.360193 423.411733,145.591115 423.411733,146.487249 C423.411733,147.213389 423.58593,147.633786 424.226484,147.740796 Z M397.85886,146.932542 C400.010119,146.932542 401.812114,142.532007 404,137.227215 C403.859356,136.665232 403.505404,135.962223 402.473725,135.962223 C399.800033,135.962223 395.050971,146.932542 397.85886,146.932542 Z M380.177554,135.962223 C378.981043,135.962223 377.124573,138.337206 376,140.948451 C376.018767,140.948451 376.035258,140.948732 376.054594,140.948732 C380.888409,140.948732 381.990235,135.962223 380.177554,135.962223 Z M433.766223,125.989207 C432.399581,125.989207 428.492586,132.835501 426,138.954128 C431.780157,134.34117 434.910467,125.989207 433.766223,125.989207 Z"
                    id="RetailMeNot"
                />
            </g>
        </g>
    </svg>
);
const SmallLogo = () => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M13.2765,10.2612361 C14.493,7.00173609 15.6015,3.87873609 16.239,2.06223609 C18.8805,1.76523609 20.2365,2.56623609 20.2365,4.51173609 C20.2365,6.40773609 18.5895,8.28423609 15.099,9.59373609 C14.4435,9.83823609 13.8285,10.0632361 13.2765,10.2612361 M7.041,17.0187361 C5.499,20.1387361 4.548,21.4527361 3.336,21.6372361 C2.787,21.7212361 2.361,21.4707361 2.361,20.6787361 C2.361,19.8132361 3.297,16.6062361 8.316,14.0337361 C7.8075,15.3102361 7.3605,16.3722361 7.041,17.0187361 M21.8505,19.2597361 C21.2265,19.4487361 20.127,19.6047361 19.296,19.2537361 C18.51,18.9237361 18.021,18.1242361 17.4165,16.6137361 C16.8975,15.3192361 16.116,13.0962361 15.5775,11.4552361 C21.3105,9.42873609 24,6.85323609 24,3.96723609 C24,1.27773609 21.765,-0.493763909 16.806,0.122736091 C14.6115,0.395736091 13.005,0.692736091 11.3055,1.01823609 C4.9515,2.23023609 2.5695,4.92423609 2.5695,7.69623609 C2.5695,9.57273609 4.245,10.8717361 6.1875,10.8717361 C7.5105,10.8717361 7.638,10.1502361 7.245,9.86073609 C6.423,9.25623609 5.9295,8.65023609 5.9295,7.60923609 C5.9295,5.98023609 7.1775,3.89523609 11.766,2.89473609 C12.0615,2.83023609 12.315,2.77473609 12.5415,2.72523609 C11.781,4.83573609 10.431,8.55873609 9.201,11.7657361 C2.193,14.5227361 0,18.2952361 0,20.9172361 C0,22.8732361 1.569,23.9997361 3.423,23.9997361 C6.246,23.9997361 8.4675,22.1427361 10.245,17.9667361 C10.9335,16.3512361 11.6895,14.4402361 12.438,12.4827361 C12.9645,14.1717361 13.6725,16.3212361 14.1765,17.6262361 C14.685,18.9507361 15.1485,19.9017361 15.8415,20.5812361 C16.6815,21.4032361 17.7075,21.8127361 19.044,21.8127361 C20.7645,21.8127361 21.948,20.9772361 22.467,20.0667361 C22.8,19.4847361 22.392,19.0947361 21.8505,19.2597361"
                id="small-logo-path"
            />
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <mask id="small-logo-mask-2" fill="white">
                <use xlinkHref="#small-logo-path" />
            </mask>
            <use
                id="Icons-/-RMN-Logo"
                fill="#FFFFFF"
                xlinkHref="#small-logo-path"
            />
        </g>
    </svg>
);
/* tslint:enable */

const MobileMenu = () => (
    <Grid alignContent="center" height="3rem" columns="3rem 1fr 3rem 3rem">
        <CenteredCell>
            <SmallLogo />
        </CenteredCell>
        <CenteredCell>
            <AutoComplete
                prefix={<Icon type="search" />}
                placeholder="Stores, brands, categories, etc…"
                dataSource={[1, 2, 3, 4, 5]}
            />
        </CenteredCell>
        <CenteredCell>
            <Avatar />
        </CenteredCell>
        <CenteredCell>
            <Icon type="hamburger" color="white" />
        </CenteredCell>
    </Grid>
);

const DesktopMenu = () => (
    <Grid
        height="80px"
        alignContent="center"
        justifyContent="center"
        columns="13.75rem 1fr 21.875rem"
    >
        <Cell middle={true}>
            <LargeLogo />
        </Cell>
        <CenteredCell>
            <AutoComplete
                size="large"
                prefix={<Icon type="search" />}
                placeholder="Stores, brands, categories, etc…"
                dataSource={[1, 2, 3, 4, 5]}
            />
        </CenteredCell>
        <Cell>
            <Menu justify="flex-end">
                <DropDown overlay={<div>1</div>}>
                    <Item path="/">
                        Categories &nbsp;
                        <Icon type="chevron-down" color="white" />
                    </Item>
                </DropDown>
                <DropDown overlay={<div>1</div>}>
                    <Item path="/">
                        Stores &nbsp;
                        <Icon type="chevron-down" color="white" />
                    </Item>
                </DropDown>
                <DropDown overlay={<div>1</div>}>
                    <Item path="/">
                        More &nbsp;
                        <Icon type="chevron-down" color="white" />
                    </Item>
                </DropDown>
            </Menu>
        </Cell>
    </Grid>
);

export const Header = ({ className, ...props }: HeaderProps) => (
    <StyledHeaderElement className={classNames(className)} {...props}>
        <CustomAdaptor maxWidth={StandardBreakpoints.md.max}>
            <MobileMenu />
        </CustomAdaptor>
        <CustomAdaptor minWidth={StandardBreakpoints.lg.min}>
            <SecondaryContainer>
                <Menu
                    className="secondary-navigation"
                    size="small"
                    bg={colors.grapePurchase.dark}
                    justify="flex-end"
                >
                    <Item path="/">Rx Saver</Item>
                    <Item path="/">Genie</Item>
                    <Item path="/">Everyday</Item>
                    <Item path="/">Get The App</Item>
                    <Item path="/">Blog</Item>
                </Menu>
            </SecondaryContainer>
            <MainContainer>
                <DesktopMenu />
            </MainContainer>
        </CustomAdaptor>
    </StyledHeaderElement>
);

export default Header;
