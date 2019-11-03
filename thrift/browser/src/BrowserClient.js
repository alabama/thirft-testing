import {HOST, WSPORT} from "./config";
import Int64Util from 'thrift/lib/nodejs/lib/thrift/int64_util';
import Int64 from 'node-int64';
import JSONInt64 from 'json-int64';

export default function testThrift() {
  if (typeof window !== 'undefined') {
    window.Int64Util = Int64Util;
    window.Int64 = Int64;
    window.JSONInt64 = JSONInt64;
  }

  if (typeof Thrift !== 'undefined') {
    const transport = new Thrift.TWebSocketTransport(`ws://${HOST}:${WSPORT}`);
    const protocol = new Thrift.TJSONProtocol(transport);
    const client = new CalculatorClient(protocol);
    transport.open();

    client.ping(function (err, response) {
      console.log('ping()');
    });


    client.add(1, 1, function (response) {
      console.log("1+1=" + response);
    });


    const work = new Work();
    work.op = Operation.DIVIDE;
    work.num1 = 1;
    work.num2 = 0;

    client.calculate(1, work, function (err, message) {
      if (err) {
        console.log("InvalidOperation " + err);
      } else {
        console.log('Whoa? You know how to divide by zero?');
      }
    });

    work.op = Operation.SUBTRACT;
    work.num1 = 15;
    work.num2 = 10;

    client.calculate(1, work, function (message) {
      console.log('15-10=' + message);

      client.getStruct(1, function (struct) {
        console.log('Check log: ' + struct.value);

        //close the connection once we're done
        //connection.end();
      });
    });
  }
}
