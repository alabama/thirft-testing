//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  const Int64 = require('node-int64');
}


//HELPER FUNCTIONS AND STRUCTURES

Calculator_ping_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_ping_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Calculator_ping_result = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_ping_result');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Calculator_add_args = class {
  constructor(args) {
    this.num1 = null;
    this.num2 = null;
    if (args) {
      if (args.num1 !== undefined && args.num1 !== null) {
        this.num1 = args.num1;
      }
      if (args.num2 !== undefined && args.num2 !== null) {
        this.num2 = args.num2;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.num1 = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.I32) {
          this.num2 = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_add_args');
    if (this.num1 !== null && this.num1 !== undefined) {
      output.writeFieldBegin('num1', Thrift.Type.I32, 1);
      output.writeI32(this.num1);
      output.writeFieldEnd();
    }
    if (this.num2 !== null && this.num2 !== undefined) {
      output.writeFieldBegin('num2', Thrift.Type.I32, 2);
      output.writeI32(this.num2);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Calculator_add_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.I32) {
          this.success = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
          break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_add_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.I32, 0);
      output.writeI32(this.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Calculator_calculate_args = class {
  constructor(args) {
    this.logid = null;
    this.w = null;
    if (args) {
      if (args.logid !== undefined && args.logid !== null) {
        this.logid = args.logid;
      }
      if (args.w !== undefined && args.w !== null) {
        this.w = new Work(args.w);
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.I32) {
          this.logid = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRUCT) {
          this.w = new Work();
          this.w.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_calculate_args');
    if (this.logid !== null && this.logid !== undefined) {
      output.writeFieldBegin('logid', Thrift.Type.I32, 1);
      output.writeI32(this.logid);
      output.writeFieldEnd();
    }
    if (this.w !== null && this.w !== undefined) {
      output.writeFieldBegin('w', Thrift.Type.STRUCT, 2);
      this.w.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Calculator_calculate_result = class {
  constructor(args) {
    this.success = null;
    this.ouch = null;
    if (args instanceof InvalidOperation) {
        this.ouch = args;
        return;
    }
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = args.success;
      }
      if (args.ouch !== undefined && args.ouch !== null) {
        this.ouch = args.ouch;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 0:
        if (ftype == Thrift.Type.I32) {
          this.success = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
        case 1:
        if (ftype == Thrift.Type.STRUCT) {
          this.ouch = new InvalidOperation();
          this.ouch.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_calculate_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.I32, 0);
      output.writeI32(this.success);
      output.writeFieldEnd();
    }
    if (this.ouch !== null && this.ouch !== undefined) {
      output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
      this.ouch.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Calculator_zip_args = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_zip_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
Calculator_zip_result = class {
  constructor(args) {
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Calculator_zip_result');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
CalculatorClient = class extends SharedServiceClient {
  constructor(input, output) {
    super(input, output); //TODO: @eugen report BUG that this is undefined if you dont call the super constructor first!!!!
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
  }

  ping () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_ping((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_ping (callback) {
    const args = new Calculator_ping_args();
    try {
      this.output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_ping();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_ping () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new Calculator_ping_result();
    result.read(this.input);
    this.input.readMessageEnd();

    return;
  }

  add (num1, num2) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_add(num1, num2, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_add (num1, num2, callback) {
    const params = {
      num1: num1,
      num2: num2
    };
    const args = new Calculator_add_args(params);
    try {
      this.output.writeMessageBegin('add', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_add();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_add () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new Calculator_add_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'add failed: unknown result';
  }

  calculate (logid, w) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_calculate(logid, w, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_calculate (logid, w, callback) {
    const params = {
      logid: logid,
      w: w
    };
    const args = new Calculator_calculate_args(params);
    try {
      this.output.writeMessageBegin('calculate', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_calculate();
        } catch (e) {
          error = e;
        }
        callback(error, result);
      });
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }

  recv_calculate () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new Calculator_calculate_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.ouch) {
      throw result.ouch;
    }
    if (null !== result.success) {
      return result.success;
    }
    throw 'calculate failed: unknown result';
  }

  zip () {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_zip((error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_zip (callback) {
    const args = new Calculator_zip_args();
    try {
      this.output.writeMessageBegin('zip', Thrift.MessageType.ONEWAY, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, null);
      callback();
    }
    catch (e) {
      if (typeof this.output.getTransport().reset === 'function') {
        this.output.getTransport().reset();
      }
      throw e;
    }
  }
};
