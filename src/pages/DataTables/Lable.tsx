import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import IconBell from '../../components/Icon/IconBell';
import IconFile from '../../components/Icon/IconFile';
import IconPrinter from '../../components/Icon/IconPrinter';
import { downloadExcel } from 'react-export-table-to-excel';
import Dropdown from '../../components/Dropdown';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import { IRootState } from '../../store';
import { BASE_URL } from '../../config';
import axios, { AxiosResponse } from 'axios';
import '../../assets/css/tippy.css'


const Lable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Range Search Table'));
    });

    const [clientData, setClientData] = useState<UserData[]>([]);
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    // const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<UserData[]>([]);
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [tempData, setTempData] = useState(initialRecords);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState<number>(1); // Explicitly specify type as number
    const [totalPages, setTotalPages] = useState<number>(1); // Explicitly specify type as number
    const [pageSize, setPageSize] = useState<number>(10); // Explicitly specify type as number
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [selectedItem, setSelectedItem] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedPacking, setSelectedPacking] = useState("");
    const [selectedGroup, setSelectedGroup] = useState("");
    const [selectedDealer, setSelectedDealer] = useState("");
    const [selectedUnit, setSelectedUnit] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [selectedBarcode, setSelectedBarcode] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");

    interface UserData {
        BARCODE: string;
        BARCODEID: any;
        BARCODE_BS: string;
        BOXSIZE: string;
        BRAND: string;
        BUYER: string;
        CATEGORY: string;
        COLOR: string;
        COMPANY: string;
        COMPANYID: number;
        CREATEDBY: string;
        CREATEDON: string;
        CUSTOME: string;
        DEALERCODE: string;
        DEALERID: number;
        ESTAG: string;
        EXPIRYDAYS: number;
        GENDER: string;
        HSNCODE: string;
        ITEMDESC: string;
        ITEMID: number;
        ITEMNAME: string;
        I_GROUP: string;
        I_SIZE: string;
        MARKDOWN: string;
        MARKUP: string;
        MATERIAL: string;
        MAXQTY: number;
        MINQTY: number;
        MRP: string;
        MRPDISC: number;
        PACKING: string;
        PCODE: string;
        PDATE: string;
        PHOTO: string;
        PRODUCT: string;
        PURPRICE: number;
        QTY: number;
        RATE: number;
        REMARK: string;
        REORDERQTY: number;
        SALEPRICE: number;
        SCOLOR: string;
        SEASON: string;
        SECTION: string;
        SHELFNO: string;
        STATUS: string;
        STYLE: string;
        SUBCATEGORY: string;
        SUBGROUP: string;
        TAG: string;
        TAX: number;
        UNIT: string;
        UPDATEDBY: string;
        UPDATEDON: string;        
    }

//     interface FormData {
//         BARCODE: string;
// BARCODEID: any;
// BARCODE_BS: string;
// BOXSIZE: string;
// BRAND: string;
// BUYER: string;
// CATEGORY: string;
// COLOR: string;
// COMPANY: string;
// COMPANYID: number;
// CREATEDBY: string;
// CREATEDON: string;
// CUSTOME: string;
// DEALERCODE: string;
// DEALERID: number;
// ESTAG: string;
// EXPIRYDAYS: number;
// GENDER: string;
// HSNCODE: string;
// ITEMDESC: string;
// ITEMID: number;
// ITEMNAME: string;
// I_GROUP: string;
// I_SIZE: string;
// MARKDOWN: string;
// MARKUP: string;
// MATERIAL: string;
// MAXQTY: number;
// MINQTY: number;
// MRP: string;
// MRPDISC: number;
// PACKING: string;
// PCODE: string;
// PDATE: string;
// PHOTO: string;
// PRODUCT: string;
// PURPRICE: number;
// QTY: number;
// RATE: number;
// REMARK: string;
// REORDERQTY: number;
// SALEPRICE: number;
// SCOLOR: string;
// SEASON: string;
// SECTION: string;
// SHELFNO: string;
// STATUS: string;
// STYLE: string;
// SUBCATEGORY: string;
// SUBGROUP: string;
// TAG: string;
// TAX: number;
// UNIT: string;
// UPDATEDBY: string;
// UPDATEDON: string;
//     }

    // const [formData, setFormData] = useState<FormData>({
    //     BARCODE : '',
    //     BARCODEID : '',
    //     BARCODE_BS : '',
    //     BOXSIZE : '',
    //     BRAND : '',
    //     BUYER : '',
    //     CATEGORY : '',
    //     COLOR : '',
    //     COMPANY : '',
    //     COMPANYID : '',
    //     CREATEDBY : '',
    //     CREATEDON : '',
    //     CUSTOME : '',
    //     DEALERCODE : '',
    //     DEALERID : '',
    //     ESTAG : '',
    //     EXPIRYDAYS : '',
    //     GENDER : '',
    //     HSNCODE : '',
    //     ITEMDESC : '',
    //     ITEMID : '',
    //     ITEMNAME : '',
    //     I_GROUP : '',
    //     I_SIZE : '',
    //     MARKDOWN : '',
    //     MARKUP : '',
    //     MATERIAL : '',
    //     MAXQTY : '',
    //     MINQTY : '',
    //     MRP : '',
    //     MRPDISC : '',
    //     PACKING : '',
    //     PCODE : '',
    //     PDATE : '',
    //     PHOTO : '',
    //     PRODUCT : '',
    //     PURPRICE : '',
    //     QTY : '',
    //     RATE : '',
    //     REMARK : '',
    //     REORDERQTY : '',
    //     SALEPRICE : '',
    //     SCOLOR : '',
    //     SEASON : '',
    //     SECTION : '',
    //     SHELFNO : '',
    //     STATUS : '',
    //     STYLE : '',
    //     SUBCATEGORY : '',
    //     SUBGROUP : '',
    //     TAG : '',
    //     TAX : '',
    //     UNIT : '',
    //     UPDATEDBY : '',
    //     UPDATEDON : ''
        
    // });


    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === 'Item name') {
            setSelectedItem(value);
        } else if (name === 'Product') {
            setSelectedProduct(value);
        } else if (name === 'Brand') {
            setSelectedBrand(value);
        } else if (name === 'Color') {
            setSelectedColor(value);
        } else if (name === 'Packing') {
            setSelectedPacking(value);
        }else if (name === 'Group') {
            setSelectedGroup(value);
        }else if (name === 'Dealer') {
            setSelectedDealer(value);
        }else if (name === 'Unit') {
            setSelectedUnit(value);
        }else if (name === 'Status') {
            setSelectedStatus(value);
        }else if (name === 'Barcode') {
            setSelectedBarcode(value);
        }else if (name === 'Size') {
            setSelectedSize(value);
        }
    }
    const handleSearch = () => {
        const filteredData = initialRecords.filter(record => {
            return (selectedItem === "" || record.ITEMNAME === selectedItem) &&
                (selectedCompany === "" || record.COMPANY === selectedCompany) &&
                (selectedBrand === "" || record.BRAND === selectedBrand) &&
                (selectedColor === "" || record.COLOR === selectedColor) &&
                (selectedProduct === "" || record.PRODUCT === selectedProduct);
        });
        setRecordsData(filteredData);
    }

    const handleReset = () => {
        setSelectedItem("");
        setSelectedProduct("");
        setSelectedBrand("");
        setSelectedColor("");
        setSelectedPacking("");
        setSelectedGroup("");
        setSelectedDealer("");
        setSelectedUnit("");
        setSelectedStatus("");
        setSelectedBarcode("");
        setSelectedSize("");
        
        setRecordsData(initialRecords.slice(0, 10));
    }

    useEffect(() => {
        setPage(1);
    }, [pageSize]);


    useEffect(() => {
        fetch(`${BASE_URL}/getLable`)
            .then(response => response.json())
            .then(data => {
                let detail = data;
                setClientData(detail);
                setInitialRecords(data);
                setRecordsData(data)
                setTempData(data)
                console.log(detail, 'dataaaaaa');


            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    interface ApiResponse {
        totalRecords: number;
        totalPages: number;
        currentPage: number;
        agents: UserData[];
    }


    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            try {
                const response: AxiosResponse<ApiResponse> = await axios.get(`${BASE_URL}/getMasterPagination?page=${currentPage}`);
                console.log(currentPage, 'aaaaaaa')
                const { totalRecords, totalPages, currentPage: fetchedCurrentPage, agents } = response.data;
                setInitialRecords(agents);
                setRecordsData(agents);
                setTempData(agents);
                setTotalPages(totalPages);
                setCurrentPage(fetchedCurrentPage);
                setTotalRecords(totalRecords);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Fetch data when the component mounts or currentPage changes
    }, [currentPage]);


    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return tempData.filter((item) => {
                return (
                    // item.id.toString().includes(search.toLowerCase()) ||
                    item.ITEMNAME.toLowerCase().includes(search.toLowerCase()) ||
                    item.COMPANY.toLowerCase().includes(search.toLowerCase()) ||
                    item.BRAND.toLowerCase().includes(search.toLowerCase()) ||
                    item.COLOR.toLowerCase().includes(search.toLowerCase()) ||
                    item.PRODUCT.toString().toLowerCase().includes(search.toLowerCase())
                    // item.APCITY.toLowerCase().includes(search.toLowerCase()) ||
                    // item.APMOBILENO.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
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

    const formatDate = (date: any) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    const col = ['id', 'agentName', 'agentFirmName', 'company', 'age', 'dob', 'email', 'phone'];
    const header = ['id', 'COMPANYID', 'AGENTID', 'AFIRMNAME', 'ACTELEPHONENO', 'ACMOBILENO', 'ACADDRESSLINE1', 'STATUS', 'AGENTNAME', 'ADOB', 'APERSONALIDTYPE', 'APERSONALID', 'APMOBILENO', 'APEMAILID', 'APADDRESSLINE1', 'APCITY', 'APSTATE', 'APCOUNTRY', 'APDISTRICT', 'APPINCODE', 'ABANKNAME', 'AACCOUNTTYPE', 'AACCOUNTNO', 'AACCOUNTHOLDERNAME', 'ABRANCHNAME', 'AIFSCCODE', 'ACHEQUENO', 'ACHEQUEREMARK', 'AMICRCODE', 'ATPNOBANK', 'CREATEDBY', 'CREATEDON', 'UPDATEDBY', 'UPDATEDBY', 'UPDATEDON', 'ACCITY', 'ACCOUNTRY', 'ACDISTRICT', 'ACPINCODE', 'Remark'];

    const exportTable = (type: any) => {
        let columns: any = header;
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


    function handleDownloadExcel() {
        const col: Array<keyof UserData> = ['BARCODE','BARCODEID','BARCODE_BS','BOXSIZE','BRAND','BUYER','CATEGORY','COLOR','COMPANY','COMPANYID','CREATEDBY','CREATEDON','CUSTOME','DEALERCODE','DEALERID','ESTAG','EXPIRYDAYS','GENDER','HSNCODE','ITEMDESC','ITEMID','ITEMNAME','I_GROUP','I_SIZE','MARKDOWN','MARKUP','MATERIAL','MAXQTY','MINQTY','MRP','MRPDISC','PACKING','PCODE','PDATE','PHOTO','PRODUCT','PURPRICE','QTY','RATE','REMARK','REORDERQTY','SALEPRICE','SCOLOR','SEASON','SECTION','SHELFNO','STATUS','STYLE','SUBCATEGORY','SUBGROUP','TAG','TAX','UNIT','UPDATEDBY','UPDATEDON'];
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                header,
                body: recordsData.map(row => col.map(key => row[key]))
            },
        });
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


    useEffect(() => {
        dispatch(setPageTitle('Column Chooser Table'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // show/hide
    const [hideCols, setHideCols] = useState<any>(['BARCODE','BARCODEID','BARCODE_BS','BOXSIZE','BUYER','CATEGORY','COMPANYID','CREATEDBY','CREATEDON','CUSTOME','DEALERCODE','DEALERID','ESTAG','EXPIRYDAYS','GENDER','HSNCODE','ITEMDESC','ITEMID','I_GROUP','MARKDOWN','MARKUP','MATERIAL','MAXQTY','MINQTY','MRP','MRPDISC','PCODE','PDATE','PHOTO','PRODUCT','PURPRICE','QTY','RATE','REMARK','REORDERQTY','SALEPRICE','SCOLOR','SEASON','SECTION','SHELFNO','STYLE','SUBCATEGORY','SUBGROUP','TAG','TAX','UPDATEDBY','UPDATEDON']);



    const showHideColumns = (col: any, value: any) => {
        if (hideCols.includes(col)) {
            setHideCols((col: any) => hideCols.filter((d: any) => d !== col));
        } else {
            setHideCols([...hideCols, col]);
        }
    };
    const cols = [
        { accessor: 'BARCODE', title: 'Barcode',sortable: true, hidden: hideCols.includes('agentName') },
        { accessor: 'BARCODEID', title: 'Barcode ID' },
        { accessor: 'BARCODE_BS', title: 'Barcode BS' },
        { accessor: 'BOXSIZE', title: 'Box Size' },
        { accessor: 'BRAND', title: 'Brand' },
        { accessor: 'BUYER', title: 'Buyer' },
        { accessor: 'CATEGORY', title: 'Category' },
        { accessor: 'COLOR', title: 'Color' },
        { accessor: 'COMPANY', title: 'Company' },
        { accessor: 'COMPANYID', title: 'Company ID' },
        { accessor: 'CREATEDBY', title: 'Created By' },
        { accessor: 'CREATEDON', title: 'Created On' },
        { accessor: 'CUSTOME', title: 'Custome' },
        { accessor: 'DEALERCODE', title: 'Dealer Code' },
        { accessor: 'DEALERID', title: 'Dealer ID' },
        { accessor: 'ESTAG', title: 'Estag' },
        { accessor: 'EXPIRYDAYS', title: 'Expiry Days' },
        { accessor: 'GENDER', title: 'Gender' },
        { accessor: 'HSNCODE', title: 'HSN Code' },
        { accessor: 'ITEMDESC', title: 'Item Description' },
        { accessor: 'ITEMID', title: 'Item ID' },
        { accessor: 'ITEMNAME', title: 'Item Name' },
        { accessor: 'I_GROUP', title: 'Group' },
        { accessor: 'I_SIZE', title: 'Size' },
        { accessor: 'MARKDOWN', title: 'Markdown' },
        { accessor: 'MARKUP', title: 'Markup' },
        { accessor: 'MATERIAL', title: 'Material' },
        { accessor: 'MAXQTY', title: 'Max Quantity' },
        { accessor: 'MINQTY', title: 'Min Quantity' },
        { accessor: 'MRP', title: 'MRP' },
        { accessor: 'MRPDISC', title: 'MRP Discount' },
        { accessor: 'PACKING', title: 'Packing' },
        { accessor: 'PCODE', title: 'PCode' },
        { accessor: 'PDATE', title: 'PDate' },
        { accessor: 'PHOTO', title: 'Photo' },
        { accessor: 'PRODUCT', title: 'Product' },
        { accessor: 'PURPRICE', title: 'Purchase Price' },
        { accessor: 'QTY', title: 'Quantity' },
        { accessor: 'RATE', title: 'Rate' },
        { accessor: 'REMARK', title: 'Remark' },
        { accessor: 'REORDERQTY', title: 'Reorder Quantity' },
        { accessor: 'SALEPRICE', title: 'Sale Price' },
        { accessor: 'SCOLOR', title: 'Secondary Color' },
        { accessor: 'SEASON', title: 'Season' },
        { accessor: 'SECTION', title: 'Section' },
        { accessor: 'SHELFNO', title: 'Shelf Number' },
        { accessor: 'STATUS', title: 'Status' },
        { accessor: 'STYLE', title: 'Style' },
        { accessor: 'SUBCATEGORY', title: 'Subcategory' },
        { accessor: 'SUBGROUP', title: 'Subgroup' },
        { accessor: 'TAG', title: 'Tag' },
        { accessor: 'TAX', title: 'Tax' },
        { accessor: 'UNIT', title: 'Unit' },
        { accessor: 'UPDATEDBY', title: 'Updated By' },
        { accessor: 'UPDATEDON', title: 'Updated On' }
    ];    

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    // useEffect(() => {
    //     setInitialRecords(() => {
    //         return rowData.filter((item) => {
    //             return (
    //                 item.id.toString().includes(search.toLowerCase()) ||
    //                 item.agentName.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.agentFirmName.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.company.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.email.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
    //                 item.dob.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.phone.toLowerCase().includes(search.toLowerCase())
    //             );
    //         });
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

    return (
        <div>
            <div className="panel mt-6">
                <div className="flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-1">
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


                    </div>
                    <button type="button" className="btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2"
                        style={{
                            width: "8%",
                            height: "33px"
                        }}
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button type="button" className="btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2"
                        style={{
                            width: "8%",
                            height: "33px"
                        }}
                        onClick={handleSearch}
                    >

                        Search
                    </button>
                    <div className="flex md:items-center md:flex-row flex-col  gap-1">
                        <div className="flex items-center gap-5 ltr:ml-auto rtl:mr-auto">
                            <div className="flex md:items-center md:flex-row flex-col gap-1">
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
                                                            <li key={i} className="flex md:flex-row flex-col " onClick={(e) => {
                                                                e.stopPropagation();
                                                            }}>
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
                            </div>
                        </div>
                    </div>

                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {/* <div className="mb-4.5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="md:flex-auto flex-1">
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
                        </div>
                    </div>
                </div> */}
                {/* <table>
                    <thead>
                        <td>
                            <label htmlFor="">Agent Name
                                <select name="Agent Name"
                                    style={{
                                        width: "144px",
                                        marginLeft: "3px",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: '5px',
                                        maxHeight: '200px'
                                    }}
                                    value={selectedAgent}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>

                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.AGENTNAME}>{record.AGENTNAME}</option>
                                    ))}
                                </select>
                            </label>
                        </td>
                        <td>
                            <label htmlFor="">Agent Firm Name
                                <select name="Agent Firm Name"
                                    style={{
                                        width: "144px",
                                        marginLeft: "3px",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: '5px'
                                    }}
                                    value={selectedFirm}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.AFIRMNAME}>{record.AFIRMNAME}</option>
                                    ))}
                                </select>
                            </label>
                        </td>
                        <td>


                            <label htmlFor=""><span style={{
                                marginRight: "2px"
                            }}>Mobile No.
                            </span>
                                <input type='text'
                                    style={{
                                        width: "144px",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: '5px'
                                    }}
                                />
                            </label>
                        </td>
                    </thead>
                    <thead>
                        <td>
                            <label htmlFor="">City
                                <select name="City"
                                    style={{
                                        width: "144px",
                                        marginLeft: "58px",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: '5px'
                                    }}
                                    value={selectedCity}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.APCITY}>{record.APCITY}</option>
                                    ))}
                                </select>
                            </label>
                        </td>
                        <td>
                            <label htmlFor="">State
                                <select name="State"
                                    style={{
                                        width: "144px",
                                        marginLeft: "82px",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: '5px'
                                    }}
                                    value={selectedState}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--ALL--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.APSTATE}>{record.APSTATE}</option>
                                    ))}
                                </select>
                            </label>
                        </td>

                        <td>
                            <label htmlFor="">Status
                                <select name="Status"
                                    style={{
                                        width: "144px",
                                        marginLeft: "30px",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: '5px'
                                    }}
                                    value={selectedStatus}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">--All--</option>
                                    {initialRecords.map((record, index) => (
                                        <option key={index} value={record.STATUS}>{record.STATUS}</option>
                                    ))}
                                </select>
                            </label>
                        </td>
                    </thead>
                </table> */}
                <table>
                    <tr style={{ display: 'flex', flexDirection: 'row' }}>


                        <label htmlFor="">Item Name
                            <input type="text" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '5px', width:'144px',marginTop:'10px' }} />
                        </label>


                        <label htmlFor="" style={{ marginLeft: '2%' }}>Product
                            <select name="Item Type" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '10px', width:'144px',marginTop:'10px' }}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.PRODUCT} >{record.PRODUCT} </option>
                            ))
                        }
                            </select>
                        </label>


                        <label htmlFor="" style={{ marginLeft: '2%' }}>Brand
                            <select name="Brand" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '80px',width:'144px',marginTop:'10px'}}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.BRAND} >{record.BRAND} </option>
                            ))
                        }
                            </select>
                        </label>


                        <label htmlFor="" style={{ marginLeft: '2%' }}>Color
                            <select name="Size" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '5px', width:'144px',marginTop:'10px' }}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.COLOR} >{record.COLOR} </option>
                            ))
                        }
                            </select>
                        </label>


                        <label htmlFor="" style={{ marginLeft: '2%' }}>Packing
                            <select name="Color" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '4px', width:'144px',marginTop:'10px' }}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.PACKING} >{record.PACKING} </option>
                            ))
                        }
                            </select>
                        </label>

                    </tr>

                    <tr style={{ display: 'flex', flexDirection: 'row' }}>

                        <label htmlFor="" style={{ marginLeft: '0px' }}>Group
                            <select name="Unit" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '13px', width:'144px' }}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.I_GROUP} >{record.I_GROUP} </option>
                            ))
                        }
                            </select>
                        </label>


                        <label htmlFor="" style={{ marginLeft: '2%' }}>Dealer
                            <select name="Brand" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '3px',width:'144px' }}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.DEALERCODE} >{record.DEALERCODE} </option>
                            ))
                        }
                            </select>
                        </label>
                        <label htmlFor="" style={{ marginLeft: '2%' }}>Unit
                            <select name="Brand" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '3px',width:'144px' }}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.UNIT} >{record.UNIT} </option>
                            ))
                        }
                            </select>
                        </label>
                        <label htmlFor="" style={{ marginLeft: '2%' }}>Status
                            <select name="Brand" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '3px',width:'144px' }}>
                                <option value="">--ALL--</option>
                                {
                            initialRecords.map((record,index) =>(
                                <option key={index} value={record.STATUS} >{record.STATUS} </option>
                            ))
                        }
                            </select>
                        </label>

                        <label htmlFor="" style={{ marginLeft: '2%' }}>Barcode
                            <input type="text" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '17px', width:'144px' }} />
                        </label>

                        <label htmlFor="" style={{ marginLeft: '2%' }}>Size
                            <input type="text" style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '17px', width:'144px' }} />
                        </label>

                        
                    </tr>
                </table>

                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        className="whitespace-nowrap table-hover"
                        records={recordsData}
                        style={{
                            position: "relative",
                            zIndex: 0
                        }}
                        columns={[
                            { accessor: 'id', title: '#', sortable: true, hidden: hideCols.includes('id') },
                            { accessor: 'ITEMNAME', title: 'Item Name', sortable: true, hidden: hideCols.includes('ITEMNAME') },
                            { accessor: 'BARCODE', title: 'Barcode', sortable: true, hidden: hideCols.includes('BARCODE') },
                            { accessor: 'BARCODEID', title: 'Barcode ID', sortable: true, hidden: hideCols.includes('BARCODEID') },
                            { accessor: 'BARCODE_BS', title: 'Barcode BS', sortable: true, hidden: hideCols.includes('BARCODE_BS') },
                            { accessor: 'BOXSIZE', title: 'Box Size', sortable: true, hidden: hideCols.includes('BOXSIZE') },
                            { accessor: 'BRAND', title: 'Brand', sortable: true, hidden: hideCols.includes('BRAND') },
                            { accessor: 'BUYER', title: 'Buyer', sortable: true, hidden: hideCols.includes('BUYER') },
                            { accessor: 'CATEGORY', title: 'Category', sortable: true, hidden: hideCols.includes('CATEGORY') },
                            { accessor: 'COLOR', title: 'Color', sortable: true, hidden: hideCols.includes('COLOR') },
                            { accessor: 'COMPANY', title: 'Company', sortable: true, hidden: hideCols.includes('COMPANY') },
                            { accessor: 'COMPANYID', title: 'Company ID', sortable: true, hidden: hideCols.includes('COMPANYID') },
                            { accessor: 'CREATEDBY', title: 'Created By', sortable: true, hidden: hideCols.includes('CREATEDBY') },
                            { accessor: 'CREATEDON', title: 'Created On', sortable: true, hidden: hideCols.includes('CREATEDON') },
                            { accessor: 'CUSTOME', title: 'Custome', sortable: true, hidden: hideCols.includes('CUSTOME') },
                            { accessor: 'DEALERCODE', title: 'Dealer Code', sortable: true, hidden: hideCols.includes('DEALERCODE') },
                            { accessor: 'DEALERID', title: 'Dealer ID', sortable: true, hidden: hideCols.includes('DEALERID') },
                            { accessor: 'ESTAG', title: 'Estag', sortable: true, hidden: hideCols.includes('ESTAG') },
                            { accessor: 'EXPIRYDAYS', title: 'Expiry Days', sortable: true, hidden: hideCols.includes('EXPIRYDAYS') },
                            { accessor: 'GENDER', title: 'Gender', sortable: true, hidden: hideCols.includes('GENDER') },
                            { accessor: 'HSNCODE', title: 'HSN Code', sortable: true, hidden: hideCols.includes('HSNCODE') },
                            { accessor: 'ITEMDESC', title: 'Item Description', sortable: true, hidden: hideCols.includes('ITEMDESC') },
                            { accessor: 'ITEMID', title: 'Item ID', sortable: true, hidden: hideCols.includes('ITEMID') }, 
                            { accessor: 'I_GROUP', title: 'Group', sortable: true, hidden: hideCols.includes('I_GROUP') },
                            { accessor: 'I_SIZE', title: 'Size', sortable: true, hidden: hideCols.includes('I_SIZE') },
                            { accessor: 'MARKDOWN', title: 'Markdown', sortable: true, hidden: hideCols.includes('MARKDOWN') },
                            { accessor: 'MARKUP', title: 'Markup', sortable: true, hidden: hideCols.includes('MARKUP') },
                            { accessor: 'MATERIAL', title: 'Material', sortable: true, hidden: hideCols.includes('MATERIAL') },
                            { accessor: 'MAXQTY', title: 'Max Quantity', sortable: true, hidden: hideCols.includes('MAXQTY') },
                            { accessor: 'MINQTY', title: 'Min Quantity', sortable: true, hidden: hideCols.includes('MINQTY') },
                            { accessor: 'MRP', title: 'MRP', sortable: true, hidden: hideCols.includes('MRP') },
                            { accessor: 'MRPDISC', title: 'MRP Discount', sortable: true, hidden: hideCols.includes('MRPDISC') },
                            { accessor: 'PACKING', title: 'Packing', sortable: true, hidden: hideCols.includes('PACKING') },
                            { accessor: 'PCODE', title: 'PCode', sortable: true, hidden: hideCols.includes('PCODE') },
                            { accessor: 'PDATE', title: 'PDate', sortable: true, hidden: hideCols.includes('PDATE') },
                            { accessor: 'PHOTO', title: 'Photo', sortable: true, hidden: hideCols.includes('PHOTO') },
                            { accessor: 'PRODUCT', title: 'Product', sortable: true, hidden: hideCols.includes('PRODUCT') },
                            { accessor: 'PURPRICE', title: 'Purchase Price', sortable: true, hidden: hideCols.includes('PURPRICE') },
                            { accessor: 'QTY', title: 'Quantity', sortable: true, hidden: hideCols.includes('QTY') },
                            { accessor: 'RATE', title: 'Rate', sortable: true, hidden: hideCols.includes('RATE') },
                            { accessor: 'REMARK', title: 'Remark', sortable: true, hidden: hideCols.includes('REMARK') },
                            { accessor: 'REORDERQTY', title: 'Reorder Quantity', sortable: true, hidden: hideCols.includes('REORDERQTY') },
                            { accessor: 'SALEPRICE', title: 'Sale Price', sortable: true, hidden: hideCols.includes('SALEPRICE') },
                            { accessor: 'SCOLOR', title: 'Secondary Color', sortable: true, hidden: hideCols.includes('SCOLOR') },
                            { accessor: 'SEASON', title: 'Season', sortable: true, hidden: hideCols.includes('SEASON') },
                            { accessor: 'SECTION', title: 'Section', sortable: true, hidden: hideCols.includes('SECTION') },
                            { accessor: 'SHELFNO', title: 'Shelf Number', sortable: true, hidden: hideCols.includes('SHELFNO') },
                            { accessor: 'STATUS', title: 'Status', sortable: true, hidden: hideCols.includes('STATUS') },
                            { accessor: 'STYLE', title: 'Style', sortable: true, hidden: hideCols.includes('STYLE') },
                            { accessor: 'SUBCATEGORY', title: 'Subcategory', sortable: true, hidden: hideCols.includes('SUBCATEGORY') },
                            { accessor: 'SUBGROUP', title: 'Subgroup', sortable: true, hidden: hideCols.includes('SUBGROUP') },
                            { accessor: 'TAG', title: 'Tag', sortable: true, hidden: hideCols.includes('TAG') },
                            { accessor: 'TAX', title: 'Tax', sortable: true, hidden: hideCols.includes('TAX') },
                            { accessor: 'UNIT', title: 'Unit', sortable: true, hidden: hideCols.includes('UNIT') },
                            { accessor: 'UPDATEDBY', title: 'Updated By', sortable: true, hidden: hideCols.includes('UPDATEDBY') },
                            { accessor: 'UPDATEDON', title: 'Updated On', sortable: true, hidden: hideCols.includes('UPDATEDON') },
                        
                        ]}
                        // totalRecords={initialRecords.length}
                        totalRecords={totalRecords}
                        recordsPerPage={pageSize}
                        page={currentPage}
                        onPageChange={(p) => setCurrentPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}

                    />
                </div>
            </div>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                {/* <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconBell />
                </div> */}
                {/* <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                <a href="https://www.npmjs.com/package/mantine-datatable" target="_blank" className="block hover:underline">
                    https://www.npmjs.com/package/mantine-datatable
                </a> */}
            </div>
        </div>
    );
};

export default Lable;