/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


import thrift from 'thrift';
import {HOST, WSPORT} from "./config";

import TTypes from './gen-nodejs/tutorial_types';
import Calculator from './gen-nodejs/Calculator';
import wsConnection from './ws_connection';

import assert from 'assert';

export default function testThrift() {

  const transport = thrift.TBufferedTransport;
  const protocol = thrift.TBinaryProtocol;
  console.log(`Transport used: ${transport.name}`);
  console.log(`Protocol used: ${(protocol.name)}`);

  const connection = wsConnection.createWSConnection(HOST, WSPORT, {
    transport : transport,
    protocol : protocol
  });
  connection.open();

  connection.on('error', function(err) {
    assert(false, err);
  });

  // Create a Calculator client with the connection
  const client = wsConnection.createWSClient(Calculator, connection);

  client.ping(function (err, response) {
    debugger;
    console.log('ping()');
  });


  client.add(1, 1, function (err, response) {
    console.log("1+1=" + response);
  });


  const work = new TTypes.Work();
  work.op = TTypes.Operation.DIVIDE;
  work.num1 = 1;
  work.num2 = 0;

  client.calculate(1, work, function (err, message) {
    if (err) {
      console.log("InvalidOperation " + err);
    } else {
      console.log('Whoa? You know how to divide by zero?');
    }
  });

  work.op = TTypes.Operation.SUBTRACT;
  work.num1 = 15;
  work.num2 = 10;

  client.calculate(1, work, function (err, message) {
    console.log('15-10=' + message);

    client.getStruct(1, function (err, message) {
      console.log('Check log: ' + message.value);

      //close the connection once we're done
      connection.close();
    });
  });
}
