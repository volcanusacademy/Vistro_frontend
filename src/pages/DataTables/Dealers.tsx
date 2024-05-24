import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { downloadExcel } from 'react-export-table-to-excel';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconBell from '../../components/Icon/IconBell';
import IconFile from '../../components/Icon/IconFile';
import IconPrinter from '../../components/Icon/IconPrinter';
import Dropdown from '../../components/Dropdown';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import { IRootState } from '../../store';
import { MultiDragPlugin } from 'sortablejs/plugins';
import { BASE_URL } from '../../config';

const rowData = [
    // {
    //     id: 1,
    //     firstName: 'Caroline',
    //     lastName: 'Jensen',
    //     email: 'carolinejensen@zidant.com',
    //     dob: '2004-05-28',
    //     address: {
    //         street: '529 Scholes Street',
    //         city: 'Temperanceville',
    //         zipcode: 5235,
    //         geo: {
    //             lat: 23.806115,
    //             lng: 164.677197,
    //         },
    //     },
    //     phone: '+1 (821) 447-3782',
    //     isActive: true,
    //     age: 39,
    //     company: 'POLARAX',
    // },
    // {
    //     id: 2,
    //     firstName: 'Celeste',
    //     lastName: 'Grant',
    //     email: 'celestegrant@polarax.com',
    //     dob: '1989-11-19',
    //     address: {
    //         street: '639 Kimball Street',
    //         city: 'Bascom',
    //         zipcode: 8907,
    //         geo: {
    //             lat: 65.954483,
    //             lng: 98.906478,
    //         },
    //     },
    //     phone: '+1 (838) 515-3408',
    //     isActive: false,
    //     age: 32,
    //     company: 'MANGLO',
    // },
    // {
    //     id: 3,
    //     firstName: 'Tillman',
    //     lastName: 'Forbes',
    //     email: 'tillmanforbes@manglo.com',
    //     dob: '2016-09-05',
    //     address: {
    //         street: '240 Vandalia Avenue',
    //         city: 'Thynedale',
    //         zipcode: 8994,
    //         geo: {
    //             lat: -34.949388,
    //             lng: -82.958111,
    //         },
    //     },
    //     phone: '+1 (969) 496-2892',
    //     isActive: false,
    //     age: 26,
    //     company: 'APPLIDECK',
    // },
    // {
    //     id: 4,
    //     firstName: 'Daisy',
    //     lastName: 'Whitley',
    //     email: 'daisywhitley@applideck.com',
    //     dob: '1987-03-23',
    //     address: {
    //         street: '350 Pleasant Place',
    //         city: 'Idledale',
    //         zipcode: 9369,
    //         geo: {
    //             lat: -54.458809,
    //             lng: -127.476556,
    //         },
    //     },
    //     phone: '+1 (861) 564-2877',
    //     isActive: true,
    //     age: 21,
    //     company: 'VOLAX',
    // },
    // {
    //     id: 5,
    //     firstName: 'Weber',
    //     lastName: 'Bowman',
    //     email: 'weberbowman@volax.com',
    //     dob: '1983-02-24',
    //     address: {
    //         street: '154 Conway Street',
    //         city: 'Broadlands',
    //         zipcode: 8131,
    //         geo: {
    //             lat: 54.501351,
    //             lng: -167.47138,
    //         },
    //     },
    //     phone: '+1 (962) 466-3483',
    //     isActive: false,
    //     age: 26,
    //     company: 'ORBAXTER',
    // },
    // {
    //     id: 6,
    //     firstName: 'Buckley',
    //     lastName: 'Townsend',
    //     email: 'buckleytownsend@orbaxter.com',
    //     dob: '2011-05-29',
    //     address: {
    //         street: '131 Guernsey Street',
    //         city: 'Vallonia',
    //         zipcode: 6779,
    //         geo: {
    //             lat: -2.681655,
    //             lng: 3.528942,
    //         },
    //     },
    //     phone: '+1 (884) 595-2643',
    //     isActive: true,
    //     age: 40,
    //     company: 'OPPORTECH',
    // },
    // {
    //     id: 7,
    //     firstName: 'Latoya',
    //     lastName: 'Bradshaw',
    //     email: 'latoyabradshaw@opportech.com',
    //     dob: '2010-11-23',
    //     address: {
    //         street: '668 Lenox Road',
    //         city: 'Lowgap',
    //         zipcode: 992,
    //         geo: {
    //             lat: 36.026423,
    //             lng: 130.412198,
    //         },
    //     },
    //     phone: '+1 (906) 474-3155',
    //     isActive: true,
    //     age: 24,
    //     company: 'GORGANIC',
    // },
    // {
    //     id: 8,
    //     firstName: 'Kate',
    //     lastName: 'Lindsay',
    //     email: 'katelindsay@gorganic.com',
    //     dob: '1987-07-02',
    //     address: {
    //         street: '773 Harrison Avenue',
    //         city: 'Carlton',
    //         zipcode: 5909,
    //         geo: {
    //             lat: 42.464724,
    //             lng: -12.948403,
    //         },
    //     },
    //     phone: '+1 (930) 546-2952',
    //     isActive: true,
    //     age: 24,
    //     company: 'AVIT',
    // },
    // {
    //     id: 9,
    //     firstName: 'Marva',
    //     lastName: 'Sandoval',
    //     email: 'marvasandoval@avit.com',
    //     dob: '2010-11-02',
    //     address: {
    //         street: '200 Malta Street',
    //         city: 'Tuskahoma',
    //         zipcode: 1292,
    //         geo: {
    //             lat: -52.206169,
    //             lng: 74.19452,
    //         },
    //     },
    //     phone: '+1 (927) 566-3600',
    //     isActive: false,
    //     age: 28,
    //     company: 'QUILCH',
    // },
    // {
    //     id: 10,
    //     firstName: 'Decker',
    //     lastName: 'Russell',
    //     email: 'deckerrussell@quilch.com',
    //     dob: '1994-04-21',
    //     address: {
    //         street: '708 Bath Avenue',
    //         city: 'Coultervillle',
    //         zipcode: 1268,
    //         geo: {
    //             lat: -41.550295,
    //             lng: -146.598075,
    //         },
    //     },
    //     phone: '+1 (846) 535-3283',
    //     isActive: false,
    //     age: 27,
    //     company: 'MEMORA',
    // },
    // {
    //     id: 11,
    //     firstName: 'Odom',
    //     lastName: 'Mills',
    //     email: 'odommills@memora.com',
    //     dob: '2010-01-24',
    //     address: {
    //         street: '907 Blake Avenue',
    //         city: 'Churchill',
    //         zipcode: 4400,
    //         geo: {
    //             lat: -56.061694,
    //             lng: -130.238523,
    //         },
    //     },
    //     phone: '+1 (995) 525-3402',
    //     isActive: true,
    //     age: 34,
    //     company: 'ZORROMOP',
    // },
    // {
    //     id: 12,
    //     firstName: 'Sellers',
    //     lastName: 'Walters',
    //     email: 'sellerswalters@zorromop.com',
    //     dob: '1975-11-12',
    //     address: {
    //         street: '978 Oakland Place',
    //         city: 'Gloucester',
    //         zipcode: 3802,
    //         geo: {
    //             lat: 11.732587,
    //             lng: 96.118099,
    //         },
    //     },
    //     phone: '+1 (830) 430-3157',
    //     isActive: true,
    //     age: 28,
    //     company: 'ORBOID',
    // },
    // {
    //     id: 13,
    //     firstName: 'Wendi',
    //     lastName: 'Powers',
    //     email: 'wendipowers@orboid.com',
    //     dob: '1979-06-02',
    //     address: {
    //         street: '376 Greenpoint Avenue',
    //         city: 'Elliott',
    //         zipcode: 9149,
    //         geo: {
    //             lat: -78.159578,
    //             lng: -9.835103,
    //         },
    //     },
    //     phone: '+1 (863) 457-2088',
    //     isActive: true,
    //     age: 31,
    //     company: 'SNORUS',
    // },
    // {
    //     id: 14,
    //     firstName: 'Sophie',
    //     lastName: 'Horn',
    //     email: 'sophiehorn@snorus.com',
    //     dob: '2018-09-20',
    //     address: {
    //         street: '343 Doughty Street',
    //         city: 'Homestead',
    //         zipcode: 330,
    //         geo: {
    //             lat: 65.484087,
    //             lng: 137.413998,
    //         },
    //     },
    //     phone: '+1 (885) 418-3948',
    //     isActive: true,
    //     age: 22,
    //     company: 'XTH',
    // },
    // {
    //     id: 15,
    //     firstName: 'Levine',
    //     lastName: 'Rodriquez',
    //     email: 'levinerodriquez@xth.com',
    //     dob: '1973-02-08',
    //     address: {
    //         street: '643 Allen Avenue',
    //         city: 'Weedville',
    //         zipcode: 8931,
    //         geo: {
    //             lat: -63.185586,
    //             lng: 117.327808,
    //         },
    //     },
    //     phone: '+1 (999) 565-3239',
    //     isActive: true,
    //     age: 27,
    //     company: 'COMTRACT',
    // },
    // {
    //     id: 16,
    //     firstName: 'Little',
    //     lastName: 'Hatfield',
    //     email: 'littlehatfield@comtract.com',
    //     dob: '2012-01-03',
    //     address: {
    //         street: '194 Anthony Street',
    //         city: 'Williston',
    //         zipcode: 7456,
    //         geo: {
    //             lat: 47.480837,
    //             lng: 6.085909,
    //         },
    //     },
    //     phone: '+1 (812) 488-3011',
    //     isActive: false,
    //     age: 33,
    //     company: 'ZIDANT',
    // },
    // {
    //     id: 17,
    //     firstName: 'Larson',
    //     lastName: 'Kelly',
    //     email: 'larsonkelly@zidant.com',
    //     dob: '2010-06-14',
    //     address: {
    //         street: '978 Indiana Place',
    //         city: 'Innsbrook',
    //         zipcode: 639,
    //         geo: {
    //             lat: -71.766732,
    //             lng: 150.854345,
    //         },
    //     },
    //     phone: '+1 (892) 484-2162',
    //     isActive: true,
    //     age: 20,
    //     company: 'SUREPLEX',
    // },
    // {
    //     id: 18,
    //     firstName: 'Kendra',
    //     lastName: 'Molina',
    //     email: 'kendramolina@sureplex.com',
    //     dob: '2002-07-19',
    //     address: {
    //         street: '567 Charles Place',
    //         city: 'Kimmell',
    //         zipcode: 1966,
    //         geo: {
    //             lat: 50.765816,
    //             lng: -117.106499,
    //         },
    //     },
    //     phone: '+1 (920) 528-3330',
    //     isActive: false,
    //     age: 31,
    //     company: 'DANJA',
    // },
    // {
    //     id: 19,
    //     firstName: 'Ebony',
    //     lastName: 'Livingston',
    //     email: 'ebonylivingston@danja.com',
    //     dob: '1994-10-18',
    //     address: {
    //         street: '284 Cass Place',
    //         city: 'Navarre',
    //         zipcode: 948,
    //         geo: {
    //             lat: 65.271256,
    //             lng: -83.064729,
    //         },
    //     },
    //     phone: '+1 (970) 591-3039',
    //     isActive: false,
    //     age: 33,
    //     company: 'EURON',
    // },
    // {
    //     id: 20,
    //     firstName: 'Kaufman',
    //     lastName: 'Rush',
    //     email: 'kaufmanrush@euron.com',
    //     dob: '2011-07-10',
    //     address: {
    //         street: '408 Kingsland Avenue',
    //         city: 'Beaulieu',
    //         zipcode: 7911,
    //         geo: {
    //             lat: 41.513153,
    //             lng: 54.821641,
    //         },
    //     },
    //     phone: '+1 (924) 463-2934',
    //     isActive: false,
    //     age: 39,
    //     company: 'ILLUMITY',
    // },
    // {
    //     id: 21,
    //     firstName: 'Frank',
    //     lastName: 'Hays',
    //     email: 'frankhays@illumity.com',
    //     dob: '2005-06-15',
    //     address: {
    //         street: '973 Caton Place',
    //         city: 'Dargan',
    //         zipcode: 4104,
    //         geo: {
    //             lat: 63.314988,
    //             lng: -138.771323,
    //         },
    //     },
    //     phone: '+1 (930) 577-2670',
    //     isActive: false,
    //     age: 31,
    //     company: 'SYBIXTEX',
    // },
    // {
    //     id: 22,
    //     firstName: 'Carmella',
    //     lastName: 'Mccarty',
    //     email: 'carmellamccarty@sybixtex.com',
    //     dob: '1980-03-06',
    //     address: {
    //         street: '919 Judge Street',
    //         city: 'Canby',
    //         zipcode: 8283,
    //         geo: {
    //             lat: 9.198597,
    //             lng: -138.809971,
    //         },
    //     },
    //     phone: '+1 (876) 456-3218',
    //     isActive: true,
    //     age: 21,
    //     company: 'ZEDALIS',
    // },
    // {
    //     id: 23,
    //     firstName: 'Massey',
    //     lastName: 'Owen',
    //     email: 'masseyowen@zedalis.com',
    //     dob: '2012-03-01',
    //     address: {
    //         street: '108 Seaview Avenue',
    //         city: 'Slovan',
    //         zipcode: 3599,
    //         geo: {
    //             lat: -74.648318,
    //             lng: 99.620699,
    //         },
    //     },
    //     phone: '+1 (917) 567-3786',
    //     isActive: false,
    //     age: 40,
    //     company: 'DYNO',
    // },
    // {
    //     id: 24,
    //     firstName: 'Lottie',
    //     lastName: 'Lowery',
    //     email: 'lottielowery@dyno.com',
    //     dob: '1982-10-10',
    //     address: {
    //         street: '557 Meserole Avenue',
    //         city: 'Fowlerville',
    //         zipcode: 4991,
    //         geo: {
    //             lat: 54.811546,
    //             lng: -20.996515,
    //         },
    //     },
    //     phone: '+1 (912) 539-3498',
    //     isActive: true,
    //     age: 36,
    //     company: 'MULTIFLEX',
    // },
    // {
    //     id: 25,
    //     firstName: 'Addie',
    //     lastName: 'Luna',
    //     email: 'addieluna@multiflex.com',
    //     dob: '1988-05-01',
    //     address: {
    //         street: '688 Bulwer Place',
    //         city: 'Harmon',
    //         zipcode: 7664,
    //         geo: {
    //             lat: -12.762766,
    //             lng: -39.924497,
    //         },
    //     },
    //     phone: '+1 (962) 537-2981',
    //     isActive: true,
    //     age: 32,
    //     company: 'PHARMACON',
    // },
];
const col = [
    'id',
    'FIRMNAME',
    'NAME',
    'CEMAILID',
    'TELEPHONE1',
    'TELEPHONE2',
    'CMOBILE',
    'AGENTCOMISSION',
    'BANKNAME',
    'ACCOUNTTYPE',
    'ACCOUNTNO',
    'ACCOUNTHOLDERNAME',
    'BRANCHNAME',
    'IFSCCODE',
    'CHEQUENO',
    'CHEQUEREMARK',
    'MICRCODE',
    'TPNOBANK',
    'CREDITLIMITS',
    'DELAYDAYS',
    'DISCOUNT',
    'STATECODE',
    'GSTIN',
    'CITY',
    'STATE',
    'COUNTRY',
    'MOBILE',
    'ADDRESS',
    'EMAILID',
    'COMPANYID',
    'DEALERID',
    'STATUS',
    'RNAME',
    'RCONTACTNO',
    'REMARK',
    'CREATEDBY',
    'CREATEDON',
    'UPDATEDBY',
    'UPDATEDON',
    'DEALERCODE',
    'AGENTID',
    'CADDRESSLINE2',
    'CADDRESSLINE3',
    'CDISTRICT',
    'CPINCODE',
    'DOB',
    'PMOBILE',
    'PEMAILID',
    'PADDRESSLINE1',
    'PADDRESSLINE2',
    'PADDRESSLINE3',
    'PCITY',
    'PSTATE',
    'PCOUNTRY',
    'PDISTRICT',
    'PPINCODE',
    'MARITALSTATUS',
    'ANNIVERSARY',
];
const Dealers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Range Search Table'));
    });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<UserData[]>([]);
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [tempData, setTempData] = useState(initialRecords);
    const [clientData, setClientData] = useState('');
    const [search, setSearch] = useState('');
    const [selectedDealer, setSelectedDealer] = useState('');
    const [selectedFirm, setSelectedFirm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

    const [hideCols, setHideCols] = useState<any>([
        'FIRMNAME',
        'NAME',
        'CEMAILID',
        'TELEPHONE1',
        'TELEPHONE2',
        'CMOBILE',
        'AGENTCOMISSION',
        'BANKNAME',
        'ACCOUNTTYPE',
        'ACCOUNTNO',
        'ACCOUNTHOLDERNAME',
        'BRANCHNAME',
        'IFSCCODE',
        'CHEQUENO',
        'CHEQUEREMARK',
        'MICRCODE',
        'TPNOBANK',
        'CREDITLIMITS',
        'DELAYDAYS',
        'DISCOUNT',
        'STATECODE',
        'GSTIN',
        'CITY',
        'STATE',
        'COUNTRY',
        'MOBILE',
        'ADDRESS',
        'EMAILID',
        'COMPANYID',
        'DEALERID',
        'STATUS',
        'RNAME',
        'RCONTACTNO',
        'REMARK',
        'CREATEDBY',
        'CREATEDON',
        'UPDATEDBY',
        'UPDATEDON',
        'DEALERCODE',
        'AGENTID',
        'CADDRESSLINE2',
        'CADDRESSLINE3',
        'CDISTRICT',
        'CPINCODE',
        'DOB',
        'PMOBILE',
        'PEMAILID',
        'PADDRESSLINE1',
        'PADDRESSLINE2',
        'PADDRESSLINE3',
        'PCITY',
        'PSTATE',
        'PCOUNTRY',
        'PDISTRICT',
        'PPINCODE',
        'MARITALSTATUS',
        'ANNIVERSARY',
    ]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return tempData.filter((item) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.FIRMNAME.toLowerCase().includes(search.toLowerCase()) ||
                    // item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item.NAME.toLowerCase().includes(search.toLowerCase()) ||
                    item.EMAILID.toLowerCase().includes(search.toLowerCase()) ||
                    // item.AGE.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.DOB.toLowerCase().includes(search.toLowerCase()) ||
                    item.TELEPHONE1.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

    // const [minAge, setMinAge] = useState<any>('');
    // const [maxAge, setMaxAge] = useState<any>('');

    // useEffect(() => {
    //     let dt = rowData;
    //     if (minAge !== '' && minAge !== null) {
    //         dt = dt.filter((d) => d.age >= Number(minAge));
    //     }
    //     if (maxAge !== '' && maxAge !== null) {
    //         dt = dt.filter((d) => d.age <= Number(maxAge));
    //     }
    //     if (minAge || maxAge) {
    //         setInitialRecords(dt);
    //         setTempData(dt);
    //     }
    // }, [minAge, maxAge]);
    const header = [
        'id',
        'FIRMNAME',
        'NAME',
        'CEMAILID',
        'TELEPHONE1',
        'TELEPHONE2',
        'CMOBILE',
        'AGENTCOMISSION',
        'BANKNAME',
        'ACCOUNTTYPE',
        'ACCOUNTNO',
        'ACCOUNTHOLDERNAME',
        'BRANCHNAME',
        'IFSCCODE',
        'CHEQUENO',
        'CHEQUEREMARK',
        'MICRCODE',
        'TPNOBANK',
        'CREDITLIMITS',
        'DELAYDAYS',
        'DISCOUNT',
        'STATECODE',
        'GSTIN',
        'CITY',
        'STATE',
        'COUNTRY',
        'MOBILE',
        'ADDRESS',
        'EMAILID',
        'COMPANYID',
        'DEALERID',
        'STATUS',
        'RNAME',
        'RCONTACTNO',
        'REMARK',
        'CREATEDBY',
        'CREATEDON',
        'UPDATEDBY',
        'UPDATEDON',
        'DEALERCODE',
        'AGENTID',
        'CADDRESSLINE2',
        'CADDRESSLINE3',
        'CDISTRICT',
        'CPINCODE',
        'DOB',
        'PMOBILE',
        'PEMAILID',
        'PADDRESSLINE1',
        'PADDRESSLINE2',
        'PADDRESSLINE3',
        'PCITY',
        'PSTATE',
        'PCOUNTRY',
        'PDISTRICT',
        'PPINCODE',
        'MARITALSTATUS',
        'ANNIVERSARY',
    ];

    const formatDate = (date: any) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };
    const cols = [
        { accessor: 'id', title: 'ID' },
        { accessor: 'COMPANYID', title: 'Company ID' },
        { accessor: 'DEALERID', title: 'Dealer ID' },
        { accessor: 'FIRMNAME', title: 'Firm Name' },
        { accessor: 'TELEPHONE1', title: 'Telephone 1' },
        { accessor: 'TELEPHONE2', title: 'Telephone 2' },
        { accessor: 'CMOBILE', title: 'Mobile' },
        { accessor: 'CADDRESSLINE1', title: 'Address Line 1' },
        { accessor: 'CCITY', title: 'City' },
        { accessor: 'CSTATE', title: 'State' },
        { accessor: 'CCOUNTRY', title: 'Country' },
        { accessor: 'TINNO', title: 'TIN Number' },
        { accessor: 'STATUS', title: 'Status' },
        { accessor: 'NAME', title: 'Name' },
        { accessor: 'RNAME', title: 'Relative Name' },
        { accessor: 'RCONTACTNO', title: 'Relative Contact Number' },
        { accessor: 'CEMAILID', title: 'Email' },
        { accessor: 'REMARK', title: 'Remark' },
        { accessor: 'CREATEDBY', title: 'Created By' },
        { accessor: 'CREATEDON', title: 'Created On' },
        { accessor: 'UPDATEDBY', title: 'Updated By' },
        { accessor: 'UPDATEDON', title: 'Updated On' },
        { accessor: 'DEALERCODE', title: 'Dealer Code' },
        { accessor: 'AGENTID', title: 'Agent ID' },
        { accessor: 'CADDRESSLINE2', title: 'Address Line 2' },
        { accessor: 'CADDRESSLINE3', title: 'Address Line 3' },
        { accessor: 'CDISTRICT', title: 'District' },
        { accessor: 'CPINCODE', title: 'PIN Code' },
        { accessor: 'DOB', title: 'Date of Birth' },
        { accessor: 'PMOBILE', title: 'Primary Mobile' },
        { accessor: 'PEMAILID', title: 'Primary Email' },
        { accessor: 'PADDRESSLINE1', title: 'Primary Address Line 1' },
        { accessor: 'PADDRESSLINE2', title: 'Primary Address Line 2' },
        { accessor: 'PADDRESSLINE3', title: 'Primary Address Line 3' },
        { accessor: 'PCITY', title: 'Primary City' },
        { accessor: 'PSTATE', title: 'Primary State' },
        { accessor: 'PCOUNTRY', title: 'Primary Country' },
        { accessor: 'PDISTRICT', title: 'Primary District' },
        { accessor: 'PPINCODE', title: 'Primary PIN Code' },
        { accessor: 'MARITALSTATUS', title: 'Marital Status' },
        { accessor: 'ANNIVERSARY', title: 'Anniversary' },
        { accessor: 'AGENTCOMISSION', title: 'Agent Commission' },
        { accessor: 'BANKNAME', title: 'Bank Name' },
        { accessor: 'ACCOUNTTYPE', title: 'Account Type' },
        { accessor: 'ACCOUNTNO', title: 'Account Number' },
        { accessor: 'ACCOUNTHOLDERNAME', title: 'Account Holder Name' },
        { accessor: 'BRANCHNAME', title: 'Branch Name' },
        { accessor: 'IFSCCODE', title: 'IFSC Code' },
        { accessor: 'CHEQUENO', title: 'Cheque Number' },
        { accessor: 'CHEQUEREMARK', title: 'Cheque Remark' },
        { accessor: 'MICRCODE', title: 'MICR Code' },
        { accessor: 'TPNOBANK', title: 'TPN Bank' },
        { accessor: 'CREDITLIMITS', title: 'Credit Limits' },
        { accessor: 'DELAYDAYS', title: 'Delay Days' },
        { accessor: 'DISCOUNT', title: 'Discount' },
        { accessor: 'STATECODE', title: 'State Code' },
        { accessor: 'GSTIN', title: 'GSTIN' },
        { accessor: 'CITY', title: 'City' },
        { accessor: 'STATE', title: 'State' },
        { accessor: 'COUNTRY', title: 'Country' },
        { accessor: 'MOBILE', title: 'Mobile' },
        { accessor: 'ADDRESS', title: 'Address' },
        { accessor: 'EMAILID', title: 'Email' },
    ];
    interface UserData {
        id: number;
        COMPANYID: number;
        DEALERID: number;
        FIRMNAME: string;
        TELEPHONE1: string;
        TELEPHONE2: string;
        CMOBILE: string;
        CADDRESSLINE1: string;
        CCITY: string;
        CSTATE: string;
        CCOUNTRY: string;
        TINNO: string;
        STATUS: string;
        NAME: string;
        RNAME: string;
        RCONTACTNO: string;
        CEMAILID: string;
        REMARK: string;
        CREATEDBY: string;
        CREATEDON: string;
        UPDATEDBY: string;
        UPDATEDON: string;
        DEALERCODE: string;
        AGENTID: number;
        CADDRESSLINE2: string;
        CADDRESSLINE3: string;
        CDISTRICT: string;
        CPINCODE: string;
        DOB: string; // Converted to string as it's not clear how the date should be formatted
        PMOBILE: string;
        PEMAILID: string;
        PADDRESSLINE1: string;
        PADDRESSLINE2: string;
        PADDRESSLINE3: string;
        PCITY: string;
        PSTATE: string;
        PCOUNTRY: string;
        PDISTRICT: string;
        PPINCODE: string;
        MARITALSTATUS: string;
        ANNIVERSARY: string; // Converted to string for consistency
        AGENTCOMISSION: number;
        BANKNAME: string;
        ACCOUNTTYPE: string;
        ACCOUNTNO: string;
        ACCOUNTHOLDERNAME: string;
        BRANCHNAME: string;
        IFSCCODE: string;
        CHEQUENO: string;
        CHEQUEREMARK: string;
        MICRCODE: string;
        TPNOBANK: string;
        CREDITLIMITS: string;
        DELAYDAYS: string;
        DISCOUNT: string;
        STATECODE: string;
        GSTIN: string;
        CITY: string;
        STATE: string;
        COUNTRY: string;
        MOBILE: string;
        ADDRESS: string;
        EMAILID: string;
    }

    useEffect(() => {
        // Fetch data from API

        fetch(`${BASE_URL}/getDealer`)
            .then((response) => response.json())
            .then((data) => {
                let detail = data;
                setClientData(detail);
                setInitialRecords(detail);
                setRecordsData(detail);
                setTempData(detail);
                console.log(detail, 'dataaaaaa');
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function handleDownloadExcel() {
        const col: Array<keyof UserData> = [
            'id',
            'FIRMNAME',
            'NAME',
            'CEMAILID',
            'TELEPHONE1',
            'TELEPHONE2',
            'CMOBILE',
            'AGENTCOMISSION',
            'BANKNAME',
            'ACCOUNTTYPE',
            'ACCOUNTNO',
            'ACCOUNTHOLDERNAME',
            'BRANCHNAME',
            'IFSCCODE',
            'CHEQUENO',
            'CHEQUEREMARK',
            'MICRCODE',
            'TPNOBANK',
            'CREDITLIMITS',
            'DELAYDAYS',
            'DISCOUNT',
            'STATECODE',
            'GSTIN',
            'CITY',
            'STATE',
            'COUNTRY',
            'MOBILE',
            'ADDRESS',
            'EMAILID',
            'COMPANYID',
            'DEALERID',
            'STATUS',
            'RNAME',
            'RCONTACTNO',
            'REMARK',
            'CREATEDBY',
            'CREATEDON',
            'UPDATEDBY',
            'UPDATEDON',
            'DEALERCODE',
            'AGENTID',
            'CADDRESSLINE2',
            'CADDRESSLINE3',
            'CDISTRICT',
            'CPINCODE',
            'DOB',
            'PMOBILE',
            'PEMAILID',
            'PADDRESSLINE1',
            'PADDRESSLINE2',
            'PADDRESSLINE3',
            'PCITY',
            'PSTATE',
            'PCOUNTRY',
            'PDISTRICT',
            'PPINCODE',
            'MARITALSTATUS',
            'ANNIVERSARY',
        ];
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                header,
                body: recordsData.map((row) => col.map((key) => row[key])),
            },
        });
    }

    const exportTable = (type: any) => {
        let columns: any = col;
        let records = initialRecords;
        let filename = 'table';

        let newVariable: any;
        newVariable = window.navigator;

        if (type === 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type === 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            // eslint-disable-next-line array-callback-return
            columns.map((d: any) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                rowhtml += '<tr>';
                // eslint-disable-next-line array-callback-return
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
        } else if (type === 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data1 = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link1 = document.createElement('a');
                link1.setAttribute('href', data1);
                link1.setAttribute('download', filename + '.txt');
                link1.click();
            } else {
                var blob1 = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob1, filename + '.txt');
                }
            }
        }
    };

    const capitalize = (text: any) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };
    const showHideColumns = (col: any, value: any) => {
        if (hideCols.includes(col)) {
            setHideCols((col: any) => hideCols.filter((d: any) => d !== col));
        } else {
            setHideCols([...hideCols, col]);
        }
    };

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === 'Dealer Name') {
            setSelectedDealer(value);
        } else if (name === 'Dealer Firm Name') {
            setSelectedFirm(value);
        } else if (name === 'City') {
            setSelectedCity(value);
        } else if (name === 'State') {
            setSelectedState(value);
        }
    };
    const handleSearch = () => {
        const filteredData = initialRecords.filter((record) => {
            return (
                (selectedDealer === '' || record.NAME === selectedDealer) &&
                (selectedFirm === '' || record.FIRMNAME === selectedFirm) &&
                (selectedCity === '' || record.CCITY === selectedCity) &&
                (selectedState === '' || record.CSTATE === selectedState)
            );
        });
        setRecordsData(filteredData);
    };

    const handleReset = () => {
        setSelectedDealer("");
        setSelectedFirm("");
        setSelectedCity("");
        setSelectedState("");
        setRecordsData(initialRecords.slice(0, 10));   
    }

    // function exportTable(arg0: string): void {
    //     throw new Error('Function not implemented.');
    // }

    // function handleDownloadExcel(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     throw new Error('Function not implemented.');
    // }

    return (
        <div>
            {/* <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconBell />
                </div>
                <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                <a href="https://www.npmjs.com/package/mantine-datatable" target="_blank" className="block hover:underline">
                    https://www.npmjs.com/package/mantine-datatable
                </a>
            </div> */}

            <div className="panel mt-6">
                <div className="mb-4.5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-5">
                        {/* <div className="md:flex-auto flex-1">
                            <input
                                type="text"
                                value={minAge}
                                onChange={(e) => {
                                    setMinAge(e.target.value);
                                }}
                                className="form-input"
                                placeholder="Minimum age..."
                            />
                        </div>
                        <div className="md:flex-auto flex-1">
                            <input
                                type="text"
                                value={maxAge}
                                onChange={(e) => {
                                    setMaxAge(e.target.value);
                                }}
                                className="form-input"
                                placeholder="Maximum age..."
                            />
                        </div> */}
                        <div className="flex items-center ">
                            <button type="button" onClick={() => exportTable('csv')} className="btn btn-primary btn-sm m-1 ">
                                <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                CSV
                            </button>
                            <button type="button" onClick={() => exportTable('txt')} className="btn btn-primary btn-sm m-1">
                                <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                TXT
                            </button>

                            <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleDownloadExcel}>
                                <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                EXCEL
                            </button>

                            <button type="button" onClick={() => exportTable('print')} className="btn btn-primary btn-sm m-1">
                                <IconPrinter className="ltr:mr-2 rtl:ml-2" />
                                PRINT
                            </button>
                            <button type="button" className="btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2"
                        style={{
                            width: "11%",
                            height: "33px",
                            padding: '8px 19px'
                        }}
                        onClick={handleReset}
                    >
                        RESET
                    </button>
                            <button 
                            type="button" 
                            className="btn btn-primary btn-sm m-1" 
                            style={{ 
                                padding: '8px 14px' 
                            }}
                            onClick={handleSearch}
                            >
                                SEARCH
                            </button>
                        </div>
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                btnClassName="!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark"
                                button={
                                    <>
                                        <span className="ltr:mr-1 rtl:ml-1">Columns</span>
                                        <IconCaretDown className="w-5 h-5" />
                                    </>
                                }
                            >
                                <div className="overflow-auto max-h-[300px]">
                                    <ul className="!min-w-[140px]">
                                        {cols.map((col, i) => {
                                            if (i % 3 === 0) {
                                                return (
                                                    <li
                                                        key={i}
                                                        className="flex md:flex-row flex-col "
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        <div className="flex items-center px-4 py-1 md:w-1/3">
                                                            <label className="cursor-pointer mb-0 flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={!hideCols.includes(col.accessor)}
                                                                    className="form-checkbox mr-2"
                                                                    defaultValue={col.accessor}
                                                                    onChange={(event) => {
                                                                        setHideCols(event.target.value);
                                                                        showHideColumns(col.accessor, event.target.checked);
                                                                    }}
                                                                />
                                                                <span>{col.title}</span>
                                                            </label>
                                                        </div>
                                                        {cols[i + 1] && (
                                                            <div className="flex items-center px-4 py-1 md:w-1/3">
                                                                <label className="cursor-pointer mb-0 flex items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={!hideCols.includes(cols[i + 1].accessor)}
                                                                        className="form-checkbox mr-2"
                                                                        defaultValue={cols[i + 1].accessor}
                                                                        onChange={(event) => {
                                                                            setHideCols(event.target.value);
                                                                            showHideColumns(cols[i + 1].accessor, event.target.checked);
                                                                        }}
                                                                    />
                                                                    <span>{cols[i + 1].title}</span>
                                                                </label>
                                                            </div>
                                                        )}
                                                        {cols[i + 2] && (
                                                            <div className="flex items-center px-4 py-1 md:w-1/3">
                                                                <label className="cursor-pointer mb-0 flex items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={!hideCols.includes(cols[i + 2].accessor)}
                                                                        className="form-checkbox mr-2"
                                                                        defaultValue={cols[i + 2].accessor}
                                                                        onChange={(event) => {
                                                                            setHideCols(event.target.value);
                                                                            showHideColumns(cols[i + 2].accessor, event.target.checked);
                                                                        }}
                                                                    />
                                                                    <span>{cols[i + 2].title}</span>
                                                                </label>
                                                            </div>
                                                        )}
                                                    </li>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </ul>
                                </div>
                            </Dropdown>
                        </div>

                        <div className="ltr:ml-auto rtl:mr-auto">
                            <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                </div>

                <table>
                    <tr>
                        <td>
                            <label htmlFor="">
                                Dealer Name
                                <select
                                    name="Dealer Name"
                                    style={{ border: '1px solid #e5e7eb', borderRadius: '5px', marginLeft: '26px', width: '144px' }}
                                    value={selectedDealer}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.NAME}>
                                            {record.NAME}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </td>
                        <td>
                            <label htmlFor="">
                                Dealer Firm Name
                                <select
                                    name="Dealer Firm Name"
                                    style={{ border: '1px solid #e5e7eb', borderRadius: '5px', marginLeft: '25px', width: '144px' }}
                                    value={selectedFirm}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.FIRMNAME}>
                                            {record.FIRMNAME}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </td>
                        <td>
                            <label htmlFor="">
                                Mobile No.
                                <input type="text" style={{ border: '1px solid #e5e7eb', borderRadius: '5px', marginLeft: '25px', width: '144px' }} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">
                                City
                                <select
                                    name="City"
                                    style={{ border: '1px solid #e5e7eb', borderRadius: '5px', marginLeft: '85px', width: '144px' }}
                                    value={selectedCity}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.CCITY}>
                                            {record.CCITY}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </td>
                        <td>
                            <label htmlFor="">
                                State
                                <select
                                    name="State"
                                    style={{ border: '1px solid #e5e7eb', borderRadius: '5px', marginLeft: '108px', width: '144px' }}
                                    value={selectedState}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.CSTATE}>
                                            {record.CSTATE}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </td>

                        <td>
                            <label htmlFor="">
                                GST No.
                                <input type="text" style={{ border: '1px solid #e5e7eb', borderRadius: '5px', marginLeft: '42px', width: '144px' }} />
                            </label>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className="whitespace-nowrap table-hover"
                    records={recordsData}
                    columns={[
                        { accessor: 'id', title: 'ID', sortable: true, hidden: hideCols.includes('id') },

                        {
                            accessor: 'FIRMNAME',
                            title: 'Firm Name',
                            sortable: true,
                            hidden: hideCols.includes('FIRMNAME'),
                        },
                        {
                            accessor: 'NAME',
                            title: 'Name',
                            sortable: true,
                            hidden: hideCols.includes('NAME'),
                        },
                        {
                            accessor: 'CEMAILID',
                            title: 'Email',
                            sortable: true,
                            hidden: hideCols.includes('CEMAILID'),
                        },
                        {
                            accessor: 'TELEPHONE1',
                            title: 'Telephone 1',
                            sortable: true,
                            hidden: hideCols.includes('TELEPHONE1'),
                        },
                        {
                            accessor: 'TELEPHONE2',
                            title: 'Telephone 2',
                            sortable: true,
                            hidden: hideCols.includes('TELEPHONE2'),
                        },
                        {
                            accessor: 'CMOBILE',
                            title: 'Mobile',
                            sortable: true,
                            hidden: hideCols.includes('CMOBILE'),
                        },
                        {
                            accessor: 'CADDRESSLINE1',
                            title: 'Address Line 1',
                            sortable: true,
                            hidden: hideCols.includes('CADDRESSLINE1'),
                        },
                        {
                            accessor: 'CCITY',
                            title: 'City',
                            sortable: true,
                            hidden: hideCols.includes('CCITY'),
                        },
                        {
                            accessor: 'CSTATE',
                            title: 'State',
                            sortable: true,
                            hidden: hideCols.includes('CSTATE'),
                        },
                        {
                            accessor: 'CCOUNTRY',
                            title: 'Country',
                            sortable: true,
                            hidden: hideCols.includes('CCOUNTRY'),
                        },
                        {
                            accessor: 'TINNO',
                            title: 'TIN Number',
                            sortable: true,
                            hidden: hideCols.includes('TINNO'),
                        },
                        {
                            accessor: 'STATUS',
                            title: 'Status',
                            sortable: true,
                            hidden: hideCols.includes('STATUS'),
                        },
                        {
                            accessor: 'RNAME',
                            title: 'Responsible Name',
                            sortable: true,
                            hidden: hideCols.includes('RNAME'),
                        },
                        {
                            accessor: 'RCONTACTNO',
                            title: 'Responsible Contact No',
                            sortable: true,
                            hidden: hideCols.includes('RCONTACTNO'),
                        },
                        {
                            accessor: 'REMARK',
                            title: 'Remarks',
                            sortable: true,
                            hidden: hideCols.includes('REMARK'),
                        },
                        {
                            accessor: 'CREATEDBY',
                            title: 'Created By',
                            sortable: true,
                            hidden: hideCols.includes('CREATEDBY'),
                        },
                        {
                            accessor: 'CREATEDON',
                            title: 'Created On',
                            sortable: true,
                            hidden: hideCols.includes('CREATEDON'),
                        },
                        {
                            accessor: 'UPDATEDBY',
                            title: 'Updated By',
                            sortable: true,
                            hidden: hideCols.includes('UPDATEDBY'),
                        },
                        {
                            accessor: 'UPDATEDON',
                            title: 'Updated On',
                            sortable: true,
                            hidden: hideCols.includes('UPDATEDON'),
                        },
                        {
                            accessor: 'DEALERCODE',
                            title: 'Dealer Code',
                            sortable: true,
                            hidden: hideCols.includes('DEALERCODE'),
                        },
                        {
                            accessor: 'AGENTID',
                            title: 'Agent ID',
                            sortable: true,
                            hidden: hideCols.includes('AGENTID'),
                        },
                        {
                            accessor: 'CADDRESSLINE2',
                            title: 'Address Line 2',
                            sortable: true,
                            hidden: hideCols.includes('CADDRESSLINE2'),
                        },
                        {
                            accessor: 'CADDRESSLINE3',
                            title: 'Address Line 3',
                            sortable: true,
                            hidden: hideCols.includes('CADDRESSLINE3'),
                        },
                        {
                            accessor: 'CDISTRICT',
                            title: 'District',
                            sortable: true,
                            hidden: hideCols.includes('CDISTRICT'),
                        },
                        {
                            accessor: 'CPINCODE',
                            title: 'Pin Code',
                            sortable: true,
                            hidden: hideCols.includes('CPINCODE'),
                        },
                        {
                            accessor: 'DOB',
                            title: 'Date of Birth',
                            sortable: true,
                            hidden: hideCols.includes('DOB'),
                        },
                        {
                            accessor: 'PMOBILE',
                            title: 'Personal Mobile',
                            sortable: true,
                            hidden: hideCols.includes('PMOBILE'),
                        },
                        {
                            accessor: 'PEMAILID',
                            title: 'Personal Email',
                            sortable: true,
                            hidden: hideCols.includes('PEMAILID'),
                        },
                        {
                            accessor: 'PADDRESSLINE1',
                            title: 'Personal Address Line 1',
                            sortable: true,
                            hidden: hideCols.includes('PADDRESSLINE1'),
                        },
                        {
                            accessor: 'PADDRESSLINE2',
                            title: 'Personal Address Line 2',
                            sortable: true,
                            hidden: hideCols.includes('PADDRESSLINE2'),
                        },
                        {
                            accessor: 'PADDRESSLINE3',
                            title: 'Personal Address Line 3',
                            sortable: true,
                            hidden: hideCols.includes('PADDRESSLINE3'),
                        },
                        {
                            accessor: 'PCITY',
                            title: 'Personal City',
                            sortable: true,
                            hidden: hideCols.includes('PCITY'),
                        },
                        {
                            accessor: 'PSTATE',
                            title: 'Personal State',
                            sortable: true,
                            hidden: hideCols.includes('PSTATE'),
                        },
                        {
                            accessor: 'PCOUNTRY',
                            title: 'Personal Country',
                            sortable: true,
                            hidden: hideCols.includes('PCOUNTRY'),
                        },
                        {
                            accessor: 'PDISTRICT',
                            title: 'Personal District',
                            sortable: true,
                            hidden: hideCols.includes('PDISTRICT'),
                        },
                        {
                            accessor: 'PPINCODE',
                            title: 'Personal Pin Code',
                            sortable: true,
                            hidden: hideCols.includes('PPINCODE'),
                        },
                        {
                            accessor: 'MARITALSTATUS',
                            title: 'Marital Status',
                            sortable: true,
                            hidden: hideCols.includes('MARITALSTATUS'),
                        },
                        {
                            accessor: 'ANNIVERSARY',
                            title: 'Anniversary',
                            sortable: true,
                            hidden: hideCols.includes('ANNIVERSARY'),
                        },
                        {
                            accessor: 'AGENTCOMISSION',
                            title: 'Agent Commission',
                            sortable: true,
                            hidden: hideCols.includes('AGENTCOMISSION'),
                        },
                        {
                            accessor: 'BANKNAME',
                            title: 'Bank Name',
                            sortable: true,
                            hidden: hideCols.includes('BANKNAME'),
                        },
                        {
                            accessor: 'ACCOUNTTYPE',
                            title: 'Account Type',
                            sortable: true,
                            hidden: hideCols.includes('ACCOUNTTYPE'),
                        },
                        {
                            accessor: 'ACCOUNTNO',
                            title: 'Account Number',
                            sortable: true,
                            hidden: hideCols.includes('ACCOUNTNO'),
                        },
                        {
                            accessor: 'ACCOUNTHOLDERNAME',
                            title: 'Account Holder Name',
                            sortable: true,
                            hidden: hideCols.includes('ACCOUNTHOLDERNAME'),
                        },
                        {
                            accessor: 'BRANCHNAME',
                            title: 'Branch Name',
                            sortable: true,
                            hidden: hideCols.includes('BRANCHNAME'),
                        },
                        {
                            accessor: 'IFSCCODE',
                            title: 'IFSC Code',
                            sortable: true,
                            hidden: hideCols.includes('IFSCCODE'),
                        },
                        {
                            accessor: 'CHEQUENO',
                            title: 'Cheque Number',
                            sortable: true,
                            hidden: hideCols.includes('CHEQUENO'),
                        },
                        {
                            accessor: 'CHEQUEREMARK',
                            title: 'Cheque Remark',
                            sortable: true,
                            hidden: hideCols.includes('CHEQUEREMARK'),
                        },
                        {
                            accessor: 'MICRCODE',
                            title: 'MICR Code',
                            sortable: true,
                            hidden: hideCols.includes('MICRCODE'),
                        },
                        {
                            accessor: 'TPNOBANK',
                            title: 'Telephone Number (Bank)',
                            sortable: true,
                            hidden: hideCols.includes('TPNOBANK'),
                        },
                        {
                            accessor: 'CREDITLIMITS',
                            title: 'Credit Limits',
                            sortable: true,
                            hidden: hideCols.includes('CREDITLIMITS'),
                        },
                        {
                            accessor: 'DELAYDAYS',
                            title: 'Delay Days',
                            sortable: true,
                            hidden: hideCols.includes('DELAYDAYS'),
                        },
                        {
                            accessor: 'DISCOUNT',
                            title: 'Discount',
                            sortable: true,
                            hidden: hideCols.includes('DISCOUNT'),
                        },
                        {
                            accessor: 'STATECODE',
                            title: 'State Code',
                            sortable: true,
                            hidden: hideCols.includes('STATECODE'),
                        },
                        {
                            accessor: 'GSTIN',
                            title: 'GSTIN',
                            sortable: true,
                            hidden: hideCols.includes('GSTIN'),
                        },
                        {
                            accessor: 'CITY',
                            title: 'City',
                            sortable: true,
                            hidden: hideCols.includes('CITY'),
                        },
                        {
                            accessor: 'STATE',
                            title: 'State',
                            sortable: true,
                            hidden: hideCols.includes('STATE'),
                        },
                        {
                            accessor: 'COUNTRY',
                            title: 'Country',
                            sortable: true,
                            hidden: hideCols.includes('COUNTRY'),
                        },
                        {
                            accessor: 'MOBILE',
                            title: 'Mobile',
                            sortable: true,
                            hidden: hideCols.includes('MOBILE'),
                        },
                        {
                            accessor: 'ADDRESS',
                            title: 'Address',
                            sortable: true,
                            hidden: hideCols.includes('ADDRESS'),
                        },
                        {
                            accessor: 'EMAILID',
                            title: 'Email ID',
                            sortable: true,
                            hidden: hideCols.includes('EMAILID'),
                        },
                    ]}
                    totalRecords={initialRecords.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

export default Dealers;
