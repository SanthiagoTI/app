/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const BillSplitter = () => {
  const [person1, setPerson1] = useState({ name: '', email: '' });
  const [person2, setPerson2] = useState({ name: '', email: '' });
  const [person3, setPerson3] = useState({ name: '', email: '' });
  const [person4, setPerson4] = useState({ name: '', email: '' });
  const [totalBill, setTotalBill] = useState('');
  const [addTip, setAddTip] = useState(false);
  const [addEmails, setAddEmails] = useState(false);
  const [splitBill, setSplitBill] = useState('');
  const [showEmails, setShowEmails] = useState(false);
  const [emails, setEmails] = useState<string[]>([]);
  const [emailMessage, setEmailMessage] = useState('');
  

  const handleCalculate = () => {
    let finalBill = Number(totalBill);
    if (addTip) {
      finalBill += finalBill * 0.2;
    }
    const splitAmount = (finalBill / 4).toFixed(2);
    setSplitBill(splitAmount);
  };
  const handleShowEmails = () => {
    const emailList = [person1.email, person2.email, person3.email, person4.email];
    setEmails(emailList);
    setShowEmails(true);

    if (emailList.every((email) => email !== '')) {
      setEmailMessage('The bill has been successfully sent to the emails entered.');

    } else {
      setEmailMessage('');

    }
  };
  return (

    <View>
      <Text>Enter Person 1:</Text>
      <TextInput
        value={person1.name}
        onChangeText={(name) => setPerson1((prev) => ({ ...prev, name }))}
        placeholder="Name"
      />

      {addEmails && (
        <TextInput
          value={person1.email}
          onChangeText={(email) =>
            setPerson1((prev) => ({ ...prev, email }))
          }
          placeholder="Email"
        />

      )}

      <Text>Enter Person 2:</Text>
      <TextInput
        value={person2.name}
        onChangeText={(name) => setPerson2((prev) => ({ ...prev, name }))}
        placeholder="Name"
      />

      {addEmails && (
        <TextInput
          value={person2.email}
          onChangeText={(email) =>
            setPerson2((prev) => ({ ...prev, email }))
          }
          placeholder="Email"
        />

      )}

      <Text>Enter Person 3:</Text>
      <TextInput
        value={person3.name}
        onChangeText={(name) => setPerson3((prev) => ({ ...prev, name }))}
        placeholder="Name"
      />

      {addEmails && (
        <TextInput
          value={person3.email}
          onChangeText={(email) =>
            setPerson3((prev) => ({ ...prev, email }))
          }
          placeholder="Email"
        />
      )}

      <Text>Enter Person 4:</Text>
      <TextInput
        value={person4.name}
        onChangeText={(name) => setPerson4((prev) => ({ ...prev, name }))}
        placeholder="Name"
      />

      {addEmails && (
        <TextInput
          value={person4.email}
          onChangeText={(email) =>
            setPerson4((prev) => ({ ...prev, email }))
          }
          placeholder="Email"
        />
      )}

      <Text>Enter Total Bill:</Text>
      <TextInput
        value={totalBill}
        onChangeText={setTotalBill}
        keyboardType="numeric"
      />

      <Text>Add 20% Tip for Waiter?</Text>
      <Button
        title={addTip ? 'Yes' : 'No'}
        onPress={() => setAddTip(!addTip)}
      />

      <Text>Add Email Addresses?</Text>
      <Button
        title={addEmails ? 'Yes' : 'No'}
        onPress={() => setAddEmails(!addEmails)}
      />

      <Button title="Show Emails" onPress={handleShowEmails} />
      <Button title="Calculate" onPress={handleCalculate} />
      {splitBill !== '' && (
        <>
          <Text>{person1.name} needs to pay: ${splitBill}</Text>
          <Text>{person2.name} needs to pay: ${splitBill}</Text>
          <Text>{person3.name} needs to pay: ${splitBill}</Text>
          <Text>{person4.name} needs to pay: ${splitBill}</Text>
        </>
      )}
      
      {showEmails && (
      <View>
      <Text>Emails:</Text>
      {emails.map((email) => (
      <Text key={email}>{email}</Text>
      ))}
      <Text>{emailMessage}</Text>
      </View>
      )}
      
    </View>
  );
};

export default BillSplitter;
