import React from 'react';
import { EmbeddedArrayInput } from 'aor-embedded-array';
import { SingleFieldList, ChipField, ReferenceArrayField, Filter, List, Edit, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

const AnswerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="profiles" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const  AnswerList = (props) => (
    <List {...props} filters={<AnswerFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="attributes.firstName" label="First Name" />
            <TextField source="attributes.lastName" label="Last Name" />
            <TextField source="attributes.company" label="Company" />
            <TextField source="attributes.email" label="Email" />
            <EditButton />
        </Datagrid>
    </List>
);

const AnswerTitle = ({ record }) => {
    return <span>New question</span>;
};

export const AnswerEdit = (props) => (
    <Edit title={<AnswerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="attributes.question" label="Answer" />
        </SimpleForm>
    </Edit>
);
