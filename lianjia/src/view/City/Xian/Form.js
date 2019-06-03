// Form.js
import React, {useState} from 'react';
import {Form, Select, Input} from 'antd';
import {useMappedState} from "redux-react-hook";
import http from '../../../http/http';

const mapState = (state) => {
    return ({
        xian: state.main.xian,
        community: state.main.community,
    });
};

let Option = Select.Option;

export default function FormComponent (props){

    function lang (cn, em){
        return cn;
    }

    const {xian} = useMappedState(mapState);
    if (xian.length === 1110) {
        /**
         *
            "2019-4-21":
            "2019-4-28":
            "2019-5-5":
            "2019-5-13":
            "2019-5-19":
            "2019-5-26":
            "2019-5-30":[]
            const date = ["2019-4-21","2019-4-28","2019-5-5","2019-5-13","2019-5-26","2019-5-30",]
         */
        const date = ["2019-4-21", "2019-4-28", "2019-5-5", "2019-5-13", "2019-5-26", "2019-5-30",];
        date.forEach(item => http.getCityByCondition('', item));
    }

    let [pool] = useState([{name: 'pool', code: 1}]);
    let [blockData, setBlock] = useState({name: '111'});
    let [formValid, setFormValid] = useState(true);
    let [validation, setValidation] = useState(
        {name: {status: '', help: ''}}
    );

    let formValueChange = (key, value) => {
        setBlock(Object.assign({}, blockData, {[key]: value}));
    };


    let validateForm = (key, value) => {
        setValidation(Object.assign({}, validation, {[key]: {status: '', help: '', valid: true}}));
        if (key === 'name') {
            if (value.includes('s')) {
                validationUpdateState('name', {
                    cn: '请输入名字',
                    en: 'please enter snapshot batchNumber'
                }, false);
            }
        }

        // calculate whole form validation
        let formValid = true;
        Object.keys(validation).forEach(key => {
            formValid = formValid && validation[key].valid;
        });
        setFormValid(formValid);
    };



    let validationUpdateState = (key, value, valid) => {
        setValidation(Object.assign({}, validation, {
            [key]: {
                status: (value.cn || value.en) ? 'error' : '',
                help: lang(value.cn, value.en),
                valid: valid
            }
        }));
    };

    let onDeviceName = ({target: {value}}) => {
        formValueChange('name', value);
        validateForm('name', value);
    };

    return (
        <div>
            <Form id='FormInCreateBlock' layout="vertical" style={{width: '100%'}}>
                <Form.Item
                    label={`formValid === ${formValid}`}
                    required={true}
                >
                    <Select style={{width: '100%'}} placeholder='请下拉选择存储池'
                        value={'请下拉选择存储池'}
                        className='bd-create-block-device-pool-select'
                        onChange={value => {
                            formValueChange('poolName')(value);
                        }}
                    >
                        {
                            pool.map(item => (
                                <Option value={item.name} key={item.name}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    label={lang('容量大小', 'replicaSize')}
                    validateStatus={validation.name.status}
                    help={validation.name.help}
                    required={true}
                >
                    <Input style={{height: 40}}
                        placeholder={lang('请输入块设备名称', 'please enter snapshot name')}
                        id='inputBLOCKStorageName'
                        className='bd-create-block-device-name-input'
                        value={blockData.name}
                        onChange={onDeviceName}
                    />
                </Form.Item>

            </Form>
        </div>

    );
}
