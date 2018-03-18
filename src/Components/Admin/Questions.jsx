import React from 'react';
import { EmbeddedArrayInput } from 'aor-embedded-array';
import { SingleFieldList, ChipField, ReferenceArrayField, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

const QuestionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="profiles" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const QuestionList = (props) => (
    <List {...props} filters={<QuestionFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="attributes.question" />
            <EditButton />
        </Datagrid>
    </List>
);

const QuestionTitle = ({ record }) => {
    return <span>New question</span>;
};

export const QuestionEdit = (props) => (
    <Edit title={<QuestionTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="attributes.question" label="Question" />
            <EmbeddedArrayInput source="attributes.correctAnswers" label="Correct Answers">
                <LongTextInput />
            </EmbeddedArrayInput>
            <EmbeddedArrayInput source="attributes.incorrectAnswers" label="Incorrect Answers">
                <LongTextInput />
            </EmbeddedArrayInput>
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
          <LongTextInput source="attributes.question" label="Question" />
          <EmbeddedArrayInput source="attributes.correctAnswers" label="Correct Answers">
              <LongTextInput />
          </EmbeddedArrayInput>
          <EmbeddedArrayInput source="attributes.incorrectAnswers" label="Incorrect Answers">
              <LongTextInput />
          </EmbeddedArrayInput>
        </SimpleForm>
    </Create>
);
