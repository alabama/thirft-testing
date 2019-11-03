//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  const Int64 = require('node-int64');
}


//HELPER FUNCTIONS AND STRUCTURES

SharedService_getStruct_args = class {
  constructor(args) {
    this.key = null;
    if (args) {
      if (args.key !== undefined && args.key !== null) {
        this.key = args.key;
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
          this.key = input.readI32().value;
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
    output.writeStructBegin('SharedService_getStruct_args');
    if (this.key !== null && this.key !== undefined) {
      output.writeFieldBegin('key', Thrift.Type.I32, 1);
      output.writeI32(this.key);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SharedService_getStruct_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new SharedStruct(args.success);
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
        if (ftype == Thrift.Type.STRUCT) {
          this.success = new SharedStruct();
          this.success.read(input);
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
    output.writeStructBegin('SharedService_getStruct_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
      this.success.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
SharedServiceClient = class {
  constructor(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
  }

  getStruct (key) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.send_getStruct(key, (error, result) => {
        return error ? reject(error) : resolve(result);
      });
    });
  }

  send_getStruct (key, callback) {
    const params = {
      key: key
    };
    const args = new SharedService_getStruct_args(params);
    try {
      this.output.writeMessageBegin('getStruct', Thrift.MessageType.CALL, this.seqid);
      args.write(this.output);
      this.output.writeMessageEnd();
      const self = this;
      this.output.getTransport().flush(true, () => {
        let error = null, result = null;
        try {
          result = self.recv_getStruct();
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

  recv_getStruct () {
    const ret = this.input.readMessageBegin();
    const mtype = ret.mtype;
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(this.input);
      this.input.readMessageEnd();
      throw x;
    }
    const result = new SharedService_getStruct_result();
    result.read(this.input);
    this.input.readMessageEnd();

    if (null !== result.success) {
      return result.success;
    }
    throw 'getStruct failed: unknown result';
  }
};
