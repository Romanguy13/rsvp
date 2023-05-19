/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RSVPInterface extends utils.Interface {
  functions: {
    "createNewEvent(uint256,uint256,uint256,string)": FunctionFragment;
    "idToEvent(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createNewEvent" | "idToEvent"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createNewEvent",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "idToEvent",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createNewEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "idToEvent", data: BytesLike): Result;

  events: {
    "NewEvent(bytes32,address,uint256,uint256,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewEvent"): EventFragment;
}

export interface NewEventEventObject {
  eventId: string;
  eventOwner: string;
  eventTimestamp: BigNumber;
  deposit: BigNumber;
  maxCapacity: BigNumber;
  eventDataCID: string;
}
export type NewEventEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, string],
  NewEventEventObject
>;

export type NewEventEventFilter = TypedEventFilter<NewEventEvent>;

export interface RSVP extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RSVPInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createNewEvent(
      _eventTimestamp: PromiseOrValue<BigNumberish>,
      _deposit: PromiseOrValue<BigNumberish>,
      _maxCapacity: PromiseOrValue<BigNumberish>,
      _eventDataCID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
        eventId: string;
        eventDataCID: string;
        eventOwner: string;
        eventTimestamp: BigNumber;
        deposit: BigNumber;
        maxCapacity: BigNumber;
        paidOut: boolean;
      }
    >;
  };

  createNewEvent(
    _eventTimestamp: PromiseOrValue<BigNumberish>,
    _deposit: PromiseOrValue<BigNumberish>,
    _maxCapacity: PromiseOrValue<BigNumberish>,
    _eventDataCID: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  idToEvent(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
      eventId: string;
      eventDataCID: string;
      eventOwner: string;
      eventTimestamp: BigNumber;
      deposit: BigNumber;
      maxCapacity: BigNumber;
      paidOut: boolean;
    }
  >;

  callStatic: {
    createNewEvent(
      _eventTimestamp: PromiseOrValue<BigNumberish>,
      _deposit: PromiseOrValue<BigNumberish>,
      _maxCapacity: PromiseOrValue<BigNumberish>,
      _eventDataCID: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
        eventId: string;
        eventDataCID: string;
        eventOwner: string;
        eventTimestamp: BigNumber;
        deposit: BigNumber;
        maxCapacity: BigNumber;
        paidOut: boolean;
      }
    >;
  };

  filters: {
    "NewEvent(bytes32,address,uint256,uint256,uint256,string)"(
      eventId?: PromiseOrValue<BytesLike> | null,
      eventOwner?: null,
      eventTimestamp?: null,
      deposit?: null,
      maxCapacity?: null,
      eventDataCID?: null
    ): NewEventEventFilter;
    NewEvent(
      eventId?: PromiseOrValue<BytesLike> | null,
      eventOwner?: null,
      eventTimestamp?: null,
      deposit?: null,
      maxCapacity?: null,
      eventDataCID?: null
    ): NewEventEventFilter;
  };

  estimateGas: {
    createNewEvent(
      _eventTimestamp: PromiseOrValue<BigNumberish>,
      _deposit: PromiseOrValue<BigNumberish>,
      _maxCapacity: PromiseOrValue<BigNumberish>,
      _eventDataCID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createNewEvent(
      _eventTimestamp: PromiseOrValue<BigNumberish>,
      _deposit: PromiseOrValue<BigNumberish>,
      _maxCapacity: PromiseOrValue<BigNumberish>,
      _eventDataCID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}