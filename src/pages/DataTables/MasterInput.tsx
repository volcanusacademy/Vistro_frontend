import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import IconBell from '../../components/Icon/IconBell';
import IconFile from '../../components/Icon/IconFile';
import IconPrinter from '../../components/Icon/IconPrinter';
import { IRootState } from '../../store';
import { BASE_URL } from '../../config';

const col = ['id', 'PRIMENAME', 'SEQUENCE'];


interface Option {
    value: string;
    label: string;
  }

const MasterInput = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Multiple Tables'));
    });

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<UserData[]>([]);
    const [recordsData, setRecordsData] = useState<UserData[]>([]);
    const [tempData, setTempData] = useState<UserData[]>([]);
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [selectedField, setSelectedField] = useState<string>('All');
    const [options, setOptions] = useState<Option[]>([]);


    
    useEffect(() => {
        // Fetch initial data
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/getMasterSet`);
                const data = await response.json();
                const dataWithId = data.map((item: any, index: number) => ({
                    ...item,
                    id: index + 1,
                }));
                // setInitialRecords(dataWithId);
                // setRecordsData(dataWithId);
                // setTempData(dataWithId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

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
                    item.SEQUENCE.toString().includes(search.toLowerCase()) ||
                    item.PRIMENAME.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

    const header = ['Id', 'PRIMENAME', 'SEQUENCE'];

    interface UserData {
        id: number;
        PRIMENAME: string;
        SEQUENCE: string;
    }

    const handleDownloadExcel = () => {
        const col: Array<keyof UserData> = ['id', 'PRIMENAME', 'SEQUENCE'];
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                header,
                body: recordsData.map(row => col.map(key => row[key])),
            },
        });
    };

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

    // const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const { value } = event.target;
    //     setSelectedField(value);
    // };
    useEffect(() => {
        const fetchOptions = async () => {
          try {
            const fetchedOptions = await fetchOptionsFromState();
            setOptions(fetchedOptions);
          } catch (error) {
            console.error('Error fetching options:', error);
          }
        };
    
        fetchOptions();
      }, []);
    
      const fetchOptionsFromState = async () => {
        try {
          // Fetch options from your application state or API
          const response = await fetch('your-api-endpoint');
          if (!response.ok) {
            throw new Error('Failed to fetch options');
          }
          const data = await response.json();
          // Assuming the response data is an array of option objects with 'value' and 'label' properties
          return data;
        } catch (error) {
          console.error('Error fetching options:', error);
          return [];
        }
      };
    
      const handleDropdownChange = (event:any) => {
        setSelectedField(event.target.value);
      };

    const handleSearchClick = async () => {
        if (selectedField!=="All") {
            try {
                const response = await fetch(`${BASE_URL}/getMasterSet?codetype=${selectedField}`);
                const data = await response.json();
                const dataWithId = data.map((item: any, index: number) => ({
                    ...item,
                    id: index + 1,
                }));
                console.log(dataWithId,"resss")
                
                setInitialRecords(dataWithId);
                setRecordsData(dataWithId);
                setTempData(dataWithId);
                // setOptions(dataWithId)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else if(selectedField=="All"){
            
            try {
                const response = await fetch(`${BASE_URL}/getMasterSet`);
                const data = await response.json();
                const dataWithId = data.map((item: any, index: number) => ({
                    ...item,
                    id: index + 1,
                }));
                setInitialRecords(dataWithId);
                setRecordsData(dataWithId);
                setTempData(dataWithId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        else {
            setInitialRecords([]);
            setRecordsData([]);
            setTempData([]);
        }
    };

    const handleReset = () => {
        setSelectedField('');
        setInitialRecords([]);
        setRecordsData([]);
        setTempData([]);
    };

    console.log(options,'option detail')

    return (
        <div>
            <div className="panel mt-6">
                <div className="mb-4.5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center flex-wrap">
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

                            <button
                                type="button"
                                className="btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2"
                                style={{
                                    width: "12%",
                                    height: "33px"
                                }}
                                onClick={handleSearchClick}
                                onChange={handleDropdownChange}
                            >
                                SEARCH
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary btn-sm m-1 w-50 h-5 ltr:mr-2 rtl:ml-2"
                                style={{
                                    width: "10%",
                                    height: "33px"
                                }}
                                onClick={handleReset}
                            >
                                RESET
                            </button>
                        </div>
                    </div>
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="">Master Input
                                    <select
                                        name="Brand Name"
                                        style={{ border: '1px solid #e5e7eb', borderRadius: '5px', margin: '0px 6px', width: '144px' }}
                                        value={selectedField}
                                        onChange={handleDropdownChange}
                                    >
                                        <option value="All">ALL</option>
                                        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
                                        {/* <option value="brand">Brand</option>
                                        <option value="colour">Colour</option>
                                        <option value="product">Product</option>
                                        <option value="category">Category</option>
                                        <option value="unit">Unit</option>
                                        <option value="city">City</option>
                                        <option value="country">Country</option>
                                        <option value="material">Material</option>
                                        <option value="size">Size</option>
                                        <option value="district">District</option>
                                        <option value="buyer">Buyer</option>
                                        <option value="section">Section</option>
                                        <option value="style">Style</option>
                                        <option value="sColor">SColor</option>
                                        <option value="subCategory">Sub Category</option>
                                        <option value="group">Group</option>
                                        <option value="subGroup">Sub Group</option>
                                        <option value="season">Season</option>
                                        <option value="gender">Gender</option>
                                        <option value="location">Location</option>
                                        <option value="bankName">Bank Name</option>
                                        <option value="packing">Packing</option>
                                        <option value="reasonOfReturn">Reason Of Return</option> */}
                                    </select>
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
                            { accessor: 'id', title: 'Id', sortable: true },
                            { accessor: 'PRIMENAME', title: 'Prime Name', sortable: true },
                            { accessor: 'SEQUENCE', title: 'Sequence', sortable: true }
                        ]}
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                    />
                </div>
            </div>
        </div>
    );
};

export default MasterInput;
